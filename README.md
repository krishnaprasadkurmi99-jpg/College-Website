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

##The portal shells are deliberately non-authenticated UI previews. The API includes the authentication and role middleware foundation; connect a production identity provider and password hashing before using it with real users.

PROJECT PROMPT: SMART CAMPUS CONNECT — Intelligent College Management and Navigation Platform
Project Overview

Build a modern, full-stack college website called Smart Campus Connect. It should be more than a traditional college website: it should function as an intelligent campus navigation, teacher tracking, classroom attendance, and academic information platform.

The primary goal is to help students find any teacher, classroom, laboratory, department, or facility on campus, check teacher availability, navigate between campus locations, and mark attendance for the correct subject and lecture period only when their presence in the assigned classroom has been verified.

The platform must include a public college website, student portal, faculty portal, administrator dashboard, interactive campus map, privacy-conscious live location system, and secure attendance management system.

Build a fully functional application with a consistent design, real database integration, working navigation, authentication, and realistic sample data. Do not create only a static UI or landing-page mockup.

1. Modern College Website Homepage

Create an attractive, professional, responsive homepage that represents a modern educational institution.

Include:

College logo, name, tagline, and navigation menu.
Hero section with campus imagery and a prominent admission enquiry button.
Quick-access cards for Campus Map, Find a Teacher, Mark Attendance, Departments, Student Portal, and Notices.
College introduction, vision, mission, achievements, and accreditation.
Academic departments and courses.
Admission information, eligibility criteria, fee details, and scholarships.
Latest announcements, examination notices, and upcoming events.
Placement statistics, recruiter highlights, and alumni achievements.
Campus gallery, facilities, testimonials, and student activities.
Contact details, location map, social links, and footer.
Global search for teachers, rooms, departments, facilities, and courses.

Use a modern, clean design with responsive layouts, readable typography, subtle animations, and accessible color contrast.

The main homepage should prominently feature the Smart Campus Navigator as the platform's signature feature.

2. Interactive Smart Campus Map

Create a fully interactive digital map of the actual college campus.

The map must display:

Every campus block, including Block A, Block B, academic blocks, administrative buildings, and department buildings.
Building entrances, floors, corridors, classrooms, laboratories, faculty rooms, and offices.
Library, cafeteria, auditorium, seminar halls, hostels, parking areas, sports grounds, medical facilities, and washrooms.
Security office, first-aid locations, emergency exits, and accessible routes.
Room numbers, building names, floor labels, and facility information.
Map interactions
Zoom, pan, select buildings, and navigate between floors.
Click a building to view its floor plan.
Click a room to see its room number, department, assigned teacher, and permitted details.
Search for any room, faculty member, department, or facility.
Display a route between two selected campus locations.
Support walking directions, estimated routes, and wheelchair-accessible paths where map data permits.
Allow users to select their starting point manually or use device location with permission.
Highlight the destination building, floor, and room.
Display location accuracy and warnings when the user's location cannot be determined reliably.
Support mobile screens and touch interactions.
Include a QR-based wayfinding option at building entrances and corridors.

Use real campus floor plans and surveyed room data where available. If these are unavailable during development, create a clearly labelled demonstration campus that administrators can replace with actual data.

3. Smart Teacher Finder and Faculty Directory

Build a comprehensive, searchable directory of college faculty members.

Each teacher profile should include:

Name and official profile photograph.
Designation and department.
Subjects taught and assigned courses.
Official staff identifier where appropriate.
Assigned building block, floor, and faculty room number.
Office hours and consultation schedule.
Current availability status.
Next scheduled class or consultation, when available.
Official institutional contact information.
A "Find on Map" button.
A "Get Directions" button.
An "Request Appointment" option.
Search examples

Students should be able to search:

A teacher's name.
A department or designation.
A subject name.
A room number such as B-204.
The Head of Department of a particular department.
Teachers currently available for consultation.

Display results with the teacher's name, department, assigned room, floor, availability, and last status update.

If no verified current location is available, show the assigned office and last known status separately. Never display an old location as a live location.

4. Privacy-Conscious Live Teacher Tracking

Implement a real-time teacher location and availability feature.

Students should be able to check where a teacher is on campus when the teacher has explicitly enabled location sharing and the system has reliable positioning data.

Teacher location features
Teachers can start, pause, resume, and stop location sharing.
Display an obvious indicator when location sharing is active.
Show the teacher's permitted current position on the campus map.
Display the relevant building, floor, and room when the positioning system can determine them reliably.
Show timestamps, location freshness, and accuracy indicators.
Distinguish between "Available," "In Class," "In a Meeting," "Moving Between Buildings," "Away," and "Location Unavailable."
Automatically stop sharing when disabled by the teacher or when the configured campus boundary is exited.
Allow teachers to hide their precise location while displaying general availability.
Support privacy schedules and restrictions during breaks or private meetings.
Avoid exposing private movement histories to students.
Let teachers manage their visibility and permissions.
Location technology

Design the system to support:

GPS and geofencing for outdoor positioning.
Bluetooth Low Energy beacons or suitable indoor positioning systems for room-level location.
Wi-Fi positioning where supported by the infrastructure.
QR check-ins or teacher status updates as alternatives.
Real-time updates using WebSockets or another suitable technology.

Do not assume that a browser can determine the exact indoor room from GPS alone. Room-level tracking requires appropriate positioning infrastructure, device permissions, and real-world calibration.

Teacher timetable integration

Connect teacher locations with academic timetables.

For example, a teacher profile could display:

Teacher: Dr. Priya Sharma
Department: Computer Science
Assigned office: Block B, Room B-204
Current status: Available for Students
Verified location: Block B, Room B-204
Last updated: 10:42 AM

Use illustrative sample data during development. In production, display actual verified data.

Clearly distinguish scheduled classroom assignments from verified physical location.

5. Smart Classroom Attendance System

Implement a secure attendance system that connects students, teachers, subjects, lecture periods, classrooms, and timetables.

The central rule is:

A student can record attendance only for the correct subject, the correct lecture period, and the assigned classroom after satisfying the configured classroom-presence verification requirements.

Student authentication
Every student must log in with an authorized college account.
Link the student account to enrollment number, department, semester, section, and registered subjects.
Display the student's daily timetable.
Show active attendance sessions only for eligible subjects.
Prevent attendance submissions for subjects the student is not enrolled in.
Use secure authentication, protected sessions, and server-side authorization.
Teacher attendance session

Teachers should be able to:

Select a scheduled subject and lecture period.
Start attendance for the assigned classroom.
Generate a dynamic, time-limited QR code.
View attendance submissions in real time.
See the enrolled student roster and attendance status.
Close attendance automatically or manually.
Correct genuine mistakes with a recorded reason.
Handle authorized exceptions.

Each attendance session must store:

Subject and subject code.
Teacher identity.
Date and period.
Start and closing times.
Assigned building, floor, and classroom.
Unique session identifier.
Attendance verification configuration.
Attendance records and timestamps.
Dynamic classroom QR verification

Use a rotating, short-lived QR code displayed in the classroom.

The workflow should be:

The teacher logs in and starts the correct lecture session.
The server creates a secure, expiring attendance token.
The classroom display shows the QR code.
The student logs in and scans the QR code.
The server validates the student's identity, subject enrollment, active session, period, classroom assignment, token, and attendance deadline.
The system checks the configured evidence of classroom presence.
If all requirements pass, attendance is recorded once.
The student sees a success confirmation, and the teacher's roster updates automatically.

Reject expired tokens, reused sessions, duplicate submissions, invalid accounts, and submissions for the wrong subject, period, or room.

A QR code by itself does not prove that a student is physically in the room because it can be shared. Use additional classroom-presence verification when stronger assurance is needed.

Additional classroom verification

Support optional:

Classroom-specific Bluetooth beacons.
Authorized campus Wi-Fi checks.
NFC taps at designated classroom points.
Teacher verification for approved exceptions.

Do not rely on GPS alone to distinguish adjacent rooms or floors. Wi-Fi connectivity and QR scanning alone must not be represented as definitive proof of physical presence.

Student attendance dashboard

Display:

Today's timetable.
Current subject, teacher, period, and classroom.
Active attendance session.
Scan QR or verify-presence option.
Present, Absent, Pending, and Excused statuses.
Subject-wise attendance percentages.
Monthly and semester attendance reports.
Attendance shortage warnings.
Submission history.
Attendance correction requests.

After a successful submission, show the subject name, period, room, and submission time.

Attendance rules
One attendance record per student per lecture session.
Attendance must be tied to a unique server-side session.
Only authorized teachers and administrators can correct attendance.
All corrections must include a reason and audit record.
Provide an exception process for connectivity failures, accessibility needs, and legitimate technical problems.
Do not automatically penalize students based solely on suspicious technical signals.
6. Student Portal

Create a personalized student dashboard with:

Student profile and academic information.
Interactive campus map.
Find My Teacher.
Today's timetable and classroom locations.
Subject-wise attendance and academic results.
Assignment and study-material access.
Examination timetable and announcements.
Fee status and payment history.
Appointment requests to teachers.
Classroom-change notifications.
Important deadlines and campus events.
Recently visited or searched rooms.
Saved teachers and frequently visited locations.

The dashboard should make it easy for students to access all important college services from one place.

7. Faculty Portal

Create a separate, secure teacher dashboard.

Include:

Faculty profile and room assignment.
Daily timetable and scheduled classrooms.
Teacher location-sharing controls.
Current availability settings.
Attendance session creation and management.
Live attendance roster.
Student academic records accessible according to permissions.
Assignment and study-material uploads.
Marks and attendance management.
Appointment requests.
Room-change notifications.
Ability to report inaccurate campus map or location data.

Teachers must retain control of live location sharing.

8. College Administration Dashboard

Build a secure administrative panel to manage the entire platform.

Campus management
Add, edit, and remove buildings, floors, rooms, and facilities.
Upload and update floor plans.
Manage campus map coordinates and accessible routes.
Maintain room assignments and classroom capacity.
Configure indoor positioning zones.
Academic management
Manage departments, courses, semesters, and sections.
Manage faculty and student accounts.
Assign teachers to subjects.
Configure lecture timetables and classrooms.
Manage examination schedules and academic calendars.
Attendance management
View subject-wise and department-wise attendance reports.
Review correction requests.
Configure attendance windows and verification policies.
Manage approved exceptions.
Export authorized reports to CSV or PDF.
Location management
Configure teacher location permissions.
Monitor positioning-system health.
Manage classroom beacon or QR configurations.
Review access audit logs.
Configure data-retention policies.
Website management
Publish announcements and news.
Manage admission information and courses.
Update faculty profiles.
Manage events, galleries, and contact information.
View appropriate website analytics.
9. Intelligent Campus Assistant

Add an AI-powered assistant that answers questions using authorized college information.

Example questions:

"Where is my mathematics teacher?"
"How do I reach the physics lab?"
"Which block contains the examination office?"
"Where is Room C-305?"
"Which teachers are available for consultation?"
"Where is my next class?"
"Can I mark attendance for the current period?"
"What is my attendance percentage in Database Management Systems?"

The assistant should use verified directory, timetable, map, and attendance data.

It must respect user permissions and must not reveal private teacher locations, other students' records, or unauthorized academic information.

When information is missing or outdated, clearly state that it cannot be verified.

10. Additional Unique Features

Implement these features where feasible:

Smart Classroom Finder: Find any classroom by room number, subject, or teacher.
Campus Navigation QR Codes: Scan a code at a building entrance to identify the starting point.
Classroom Change Alerts: Notify students when a lecture moves to a different room.
Teacher Appointment Booking: Allow students to request consultation times.
Attendance Shortage Predictor: Estimate whether students may fall below the required attendance threshold based on current records and future scheduled classes.
Digital Student ID: Provide a secure digital ID with an optional verification QR code.
Emergency Navigation: Display verified emergency exits, first-aid points, and security offices.
Accessibility Mode: Offer accessible routes, readable layouts, and keyboard-friendly controls.
Offline Campus Map: Cache essential map information for supported devices.
Multilingual Interface: Support English and additional configured campus languages.
Smart Notifications: Deliver relevant timetable, room, attendance, and academic announcements.
11. UI/UX and Design System

Create a polished, modern, professional interface.

Design requirements:

Mobile-first responsive layout.
Desktop sidebar or top navigation where appropriate.
Interactive campus map as a central feature.
Split-screen map and information panel.
Clear status indicators for teacher availability and location freshness.
Modern cards, tables, search fields, and dashboard widgets.
Light and dark modes.
Consistent typography, spacing, icons, and colors.
Subtle animations and smooth transitions.
Loading states, empty states, error messages, and success notifications.
Accessible contrast, keyboard navigation, and screen-reader support.
Fast page loading and optimized images.

Avoid overcrowded dashboards. Prioritize the map, teacher finder, timetable, and attendance actions.

12. Recommended Technology Stack

Use a modular, maintainable, full-stack architecture.

Frontend:

React or Next.js.
TypeScript.
Tailwind CSS.
A suitable accessible component library.
Leaflet with custom campus coordinates or MapLibre GL for mapping.
SVG or another suitable format for indoor floor plans.

Backend:

Node.js with a suitable server framework.
REST APIs or a well-designed alternative.
WebSockets or Server-Sent Events for real-time updates.

Database:

PostgreSQL.
PostGIS for spatial data where appropriate.
Structured relational tables for students, faculty, subjects, enrollments, classrooms, timetables, attendance sessions, attendance records, and location permissions.

Security:

Secure authentication and role-based access control.
Institutional single sign-on if available.
Secure password hashing when managing passwords directly.
HTTPS and server-side input validation.
Protected APIs and database constraints.
Rate limiting, audit logs, secure secrets management, and backups.

Use database transactions and uniqueness constraints to prevent duplicate attendance records.

13. Security, Privacy, and Data Protection

Implement privacy and security from the beginning.

Teachers must explicitly consent to live location sharing.
Teachers must be able to pause and stop tracking.
Restrict precise teacher locations to authorized users and legitimate purposes.
Never expose detailed private movement history to students.
Minimize retention of sensitive location data.
Enforce access permissions on the server, not only in the UI.
Protect student records and attendance data from unauthorized access.
Use short-lived attendance tokens and replay protection.
Maintain audit trails for sensitive actions and attendance corrections.
Provide clear location freshness and accuracy information.
Do not use fabricated location data to simulate verified live tracking in production.
Use synthetic data for demonstrations and development.
14. Implementation and Delivery Requirements

Build the application in working modules.

Phase 1:

College homepage and navigation.
Authentication and role-based access.
Faculty directory.
Campus map and room directory.
Student and teacher dashboards.
Timetable management.

Phase 2:

Teacher location-sharing controls.
Live location updates.
Campus positioning integration.
Indoor navigation.

Phase 3:

Subject- and period-specific attendance.
Dynamic QR codes.
Server-side attendance validation.
Classroom presence verification.
Attendance reports and correction workflows.

Phase 4:

AI campus assistant.
Notifications and appointment booking.
Advanced analytics.
Accessibility and offline improvements.

The phases may be developed in parallel when appropriate, but each module must integrate with the same database and authentication system.

Provide:

Complete source code.
Organized and reusable components.
Database schema and migrations.
Seed scripts with clearly labelled sample data.
API implementation and validation.
Environment variable example file.
Setup and deployment instructions.
Testing instructions.
Error handling and logging.
A README explaining how to replace demonstration campus data with actual college information.

Do not hardcode credentials, fabricate real faculty information, or claim that physical location tracking works without the required infrastructure.

All visible buttons, navigation items, forms, map interactions, and dashboard actions must work or be clearly labelled as unavailable until configured.

Final Objective

Deliver a complete, production-oriented Smart Campus Connect platform that integrates:

A modern college website.
An interactive building- and floor-level campus map.
A teacher directory with exact office and room details.
Privacy-conscious live teacher location and availability.
Student and faculty dashboards.
Secure, classroom-specific, subject-specific, period-specific attendance.
Dynamic QR attendance with optional stronger classroom-presence verification.
Timetable and classroom-change management.
An administrative dashboard.
An AI-powered campus assistant.

The defining feature of the platform must be the seamless connection between teachers, classrooms, campus navigation, timetables, and verified attendance.

Build a functional application rather than a static prototype. Clearly distinguish software features that can be demonstrated immediately from live integrations that require actual campus floor plans, positioning hardware, institutional accounts, or external service credentials.