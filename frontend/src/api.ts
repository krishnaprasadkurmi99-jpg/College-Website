const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  const payload = (await response.json()) as T & { error?: string };
  if (!response.ok) throw new Error(payload.error ?? "The request could not be completed.");
  return payload;
}

export type ApiCourse = {
  title: string;
  code?: string;
  degree?: string;
  department: string;
  duration?: string;
  description?: string;
};

export type ApiEvent = {
  title: string;
  type: string;
  date: string;
  location?: string;
  description?: string;
};

export const api = {
  courses: () => request<ApiCourse[]>("/courses"),
  events: () => request<ApiEvent[]>("/events"),
  admissionEnquiry: (data: { name: string; email: string; interest: string; message: string }) =>
    request<{ message: string }>("/admissions/enquiries", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
