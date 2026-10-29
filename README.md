# ABC College Platform

React + TypeScript frontend and Node.js + Express backend scaffold for the ABC College public website and role-based portals.

The project is separated into two top-level folders:

- `frontend/` — React, TypeScript, Vite, pages, portal UI, and API client
- `backend/` — Express API, authentication middleware, validation, and MongoDB models

## Run locally

1. Install Node.js 20 or newer.
2. From this folder, run `npm install`.
3. Copy `backend/.env.example` to `backend/.env`.
4. Run `npm run dev`.
5. Open `http://localhost:5173`.

The frontend uses `VITE_API_URL` from `frontend/.env` and defaults to `http://localhost:4000/api`. Courses, events, and admissions enquiries are connected to the Express backend. If the backend is unavailable, the public frontend displays clearly labeled demo fallback data. The API runs at `http://localhost:4000`, with demo authentication enabled by `DEMO_AUTH=true`. Set `DEMO_AUTH=false` and provide `MONGODB_URI` and a strong `JWT_SECRET` before connecting real data.

## Routes

- Public website: `/`, `/about`, `/academics`, `/admissions`, `/faculty`, `/campus`, `/events`, `/contact`
- Portal shells: `/portal/student`, `/portal/faculty`, `/portal/admin`
- API health: `GET /api/health`

The portal shells are deliberately non-authenticated UI previews. The API includes the authentication and role middleware foundation; connect a production identity provider and password hashing before using it with real users.
