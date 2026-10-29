export type Course = { title: string; degree: string; department: string; duration: string; description: string };
export type PortalRole = "student" | "faculty" | "admin";

export const courses: Course[] = [
  { title: "Interaction Design", degree: "B.Des", department: "Design & Innovation", duration: "4 years", description: "Design products and experiences that make a meaningful difference." },
  { title: "Strategic Innovation", degree: "M.Des", department: "Design & Innovation", duration: "2 years", description: "Lead creative teams and turn ambitious ideas into useful change." },
  { title: "Business & Leadership", degree: "BBA", department: "Business & Leadership", duration: "3 years", description: "Build the judgment and fluency to lead in a complex world." },
  { title: "Computer Science", degree: "B.Tech", department: "Technology & Science", duration: "4 years", description: "Explore computation through rigorous study and hands-on building." },
];

export const events = [
  { date: "18 FEB", title: "Open Campus Day", type: "Event", detail: "Meet our community, tour the studios, and ask your questions." },
  { date: "02 MAR", title: "Future Forum: Designing Tomorrow", type: "Event", detail: "A sample public conversation with makers and changemakers." },
  { date: "12 JAN", title: "Applications now open", type: "Notice", detail: "Sample notice: applications for the 2026–27 academic year are open." },
];
