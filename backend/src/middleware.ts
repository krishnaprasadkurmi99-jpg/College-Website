import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export type Role = "student" | "faculty" | "admin";
export type AuthRequest = Request & { user?: { id: string; role: Role } };

export function requireAuth(roles?: Role[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const header = req.header("authorization");
    const secret = process.env.JWT_SECRET;
    if (!header?.startsWith("Bearer ") || !secret) return res.status(401).json({ error: "Authentication required." });
    try {
      const user = jwt.verify(header.slice(7), secret) as { id: string; role: Role };
      if (roles && !roles.includes(user.role)) return res.status(403).json({ error: "You do not have permission for this resource." });
      req.user = user; next();
    } catch { return res.status(401).json({ error: "Invalid or expired token." }); }
  };
}
