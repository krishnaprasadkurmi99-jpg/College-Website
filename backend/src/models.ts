import { Schema, model } from "mongoose";

export const Student = model("Student", new Schema({ name: String, email: { type: String, unique: true }, program: String, enrollmentYear: Number, attendance: Number }));
export const Course = model("Course", new Schema({ title: String, code: String, department: String, degree: String, duration: String, description: String }));
export const Admission = model("Admission", new Schema({ name: String, email: String, interest: String, message: String, status: { type: String, default: "new" } }, { timestamps: true }));
export const Event = model("Event", new Schema({ title: String, type: String, date: Date, location: String, description: String }));
