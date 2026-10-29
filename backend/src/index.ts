import "dotenv/config";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { z } from "zod";
import { Admission, Course, Event } from "./models.js";
import { requireAuth, type AuthRequest } from "./middleware.js";

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN ?? "http://localhost:5173" }));
app.use(express.json({ limit: "100kb" }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 100 }));
app.get("/api/health", (_req, res) => res.json({ status: "ok", demoMode: process.env.DEMO_AUTH === "true" }));

app.post("/api/auth/login", (req, res) => {
  const body = z.object({ email: z.string().email(), password: z.string().min(6), role: z.enum(["student", "faculty", "admin"]) }).safeParse(req.body);
  if (!body.success) return res.status(400).json({ error: "Enter a valid email, password, and role." });
  if (process.env.DEMO_AUTH !== "true") return res.status(501).json({ error: "Authentication provider is not configured." });
  const secret = process.env.JWT_SECRET;
  if (!secret) return res.status(500).json({ error: "JWT_SECRET is not configured." });
  return res.json({ token: jwt.sign({ id: `demo-${body.data.role}`, role: body.data.role }, secret, { expiresIn: "2h" }), user: { email: body.data.email, role: body.data.role } });
});

app.get("/api/courses", async (_req, res, next) => { try { const data = process.env.DEMO_AUTH === "true" ? [{ title: "Computer Science", code: "B.Tech", department: "Technology & Science" }] : await Course.find().lean(); res.json(data); } catch (error) { next(error); } });
app.get("/api/events", async (_req, res, next) => { try { const data = process.env.DEMO_AUTH === "true" ? [{ title: "Open Campus Day", type: "Event", date: "2025-02-18" }] : await Event.find().sort({ date: 1 }).lean(); res.json(data); } catch (error) { next(error); } });
app.post("/api/admissions/enquiries", async (req, res, next) => { const body = z.object({ name: z.string().min(2).max(100), email: z.string().email(), interest: z.string().min(2).max(100), message: z.string().min(15).max(2000) }).safeParse(req.body); if (!body.success) return res.status(400).json({ error: "Please provide valid enquiry details." }); try { if (process.env.DEMO_AUTH !== "true") await Admission.create(body.data); res.status(201).json({ message: "Enquiry received." }); } catch (error) { next(error); } });
app.get("/api/student/me", requireAuth(["student"]), (req, res) => res.json({ id: (req as AuthRequest).user?.id, attendance: 88, gpa: 3.74, notices: 4 }));
app.get("/api/faculty/overview", requireAuth(["faculty", "admin"]), (_req, res) => res.json({ courses: 4, attendanceTasks: 12, pendingResults: 3 }));
app.get("/api/admin/overview", requireAuth(["admin"]), (_req, res) => res.json({ students: 12000, admissions: 284, courses: 32, alerts: 7 }));

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => { console.error(error); res.status(500).json({ error: "An unexpected server error occurred." }); });
const port = Number(process.env.PORT ?? 4000);
if (process.env.MONGODB_URI && process.env.DEMO_AUTH !== "true") mongoose.connect(process.env.MONGODB_URI).then(() => app.listen(port, () => console.log(`API listening on ${port}`))).catch(error => { console.error("MongoDB connection failed", error); process.exit(1); });
else app.listen(port, () => console.log(`API listening on ${port} in demo mode`));
