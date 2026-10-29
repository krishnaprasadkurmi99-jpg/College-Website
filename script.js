const courses = [
  { title: "Interaction Design", department: "Design", degree: "Undergraduate", code: "B.Des", duration: "4 years", description: "Design products and experiences that make a meaningful difference." },
  { title: "Strategic Innovation", department: "Design", degree: "Postgraduate", code: "M.Des", duration: "2 years", description: "Lead creative teams and turn ambitious ideas into useful change." },
  { title: "Business & Leadership", department: "Business", degree: "Undergraduate", code: "BBA", duration: "3 years", description: "Build the judgment, fluency, and confidence to lead in a complex world." },
  { title: "Technology Management", department: "Business", degree: "Postgraduate", code: "MBA", duration: "2 years", description: "Connect technology, people, and strategy to create lasting value." },
  { title: "Computer Science", department: "Technology", degree: "Undergraduate", code: "B.Tech", duration: "4 years", description: "Explore computation through rigorous study and hands-on building." },
  { title: "Data & Artificial Intelligence", department: "Technology", degree: "Postgraduate", code: "M.Tech", duration: "2 years", description: "Use data responsibly to solve the problems that matter most." },
  { title: "Culture & Society", department: "Humanities", degree: "Undergraduate", code: "BA", duration: "3 years", description: "Understand people, stories, and systems through a human lens." },
  { title: "Public Policy", department: "Humanities", degree: "Postgraduate", code: "MA", duration: "2 years", description: "Turn research and empathy into better public decisions." },
];
const faculty = [
  { name: "Dr. Ananya Rao", department: "Design", role: "Associate Professor · Sample profile", qualification: "Design research and service innovation", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80" },
  { name: "Prof. Rohan Mehta", department: "Business", role: "Professor · Sample profile", qualification: "Strategy and responsible leadership", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80" },
  { name: "Dr. Kavya Iyer", department: "Technology", role: "Assistant Professor · Sample profile", qualification: "Machine learning and human-computer interaction", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=500&q=80" },
  { name: "Prof. Arjun Sen", department: "Humanities", role: "Associate Professor · Sample profile", qualification: "Culture, media, and public life", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" },
];
const events = [
  { type: "event", date: "18", month: "FEB", title: "Open Campus Day", location: "ABC College · 10:00 AM", description: "Meet our community, tour the studios, and ask your questions." },
  { type: "event", date: "02", month: "MAR", title: "Future Forum: Designing Tomorrow", location: "Main auditorium · 4:00 PM", description: "A sample public conversation with makers and changemakers." },
  { type: "notice", date: "12", month: "JAN", title: "Applications now open", location: "Admissions office · Online", description: "Sample notice: applications for the 2025–26 academic year are open." },
];

const $ = (selector) => document.querySelector(selector);
const menuButton = $(".menu-toggle");
const nav = $(".main-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
}));

function renderCourses() {
  const query = $("#course-search").value.toLowerCase().trim();
  const department = $("#course-department").value;
  const degree = $("#course-degree").value;
  const filtered = courses.filter((course) => (!query || `${course.title} ${course.description}`.toLowerCase().includes(query)) && (department === "all" || course.department === department) && (degree === "all" || course.degree === degree));
  $("#course-list").innerHTML = filtered.map((course, index) => `<article class="course-card"><span class="course-number">${String(index + 1).padStart(2, "0")}</span><div><p class="card-tag">${course.code} · ${course.degree}</p><h3>${course.title}</h3><p>${course.description}</p></div><span class="course-meta">${course.duration}<br /><small>${course.department}</small></span></article>`).join("");
  $("#course-empty").hidden = filtered.length !== 0;
}
["#course-search", "#course-department", "#course-degree"].forEach((selector) => $(selector).addEventListener("input", renderCourses));
renderCourses();

function renderFaculty() {
  const query = $("#faculty-search").value.toLowerCase().trim();
  const department = $("#faculty-department").value;
  const filtered = faculty.filter((person) => (!query || `${person.name} ${person.qualification}`.toLowerCase().includes(query)) && (department === "all" || person.department === department));
  $("#faculty-list").innerHTML = filtered.map((person) => `<article class="faculty-card"><img src="${person.image}" alt="${person.name}, sample faculty profile" /><div><p class="card-tag">${person.department} department</p><h3>${person.name}</h3><p>${person.role}</p><small>${person.qualification}</small></div></article>`).join("");
}
["#faculty-search", "#faculty-department"].forEach((selector) => $(selector).addEventListener("input", renderFaculty));
renderFaculty();

function renderEvents(filter = "all") {
  $("#event-list").innerHTML = events.filter((item) => filter === "all" || item.type === filter).map((item) => `<article class="event-card"><div class="event-date"><strong>${item.date}</strong><span>${item.month}</span></div><div><p class="card-tag">${item.type === "event" ? "Upcoming event" : "Sample notice"}</p><h3>${item.title}</h3><p class="muted">${item.description}</p><small>${item.location}</small></div><span class="event-arrow">↗</span></article>`).join("");
}
document.querySelectorAll(".filter-tabs button").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".filter-tabs button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderEvents(button.dataset.filter);
}));
renderEvents();

const lightbox = $("#lightbox");
document.querySelectorAll(".facility-card").forEach((card) => card.addEventListener("click", () => {
  $("#lightbox-image").src = card.dataset.image;
  $("#lightbox-image").alt = card.dataset.title;
  $("#lightbox-title").textContent = card.dataset.title;
  lightbox.hidden = false;
  $(".lightbox-close").focus();
}));
function closeLightbox() { lightbox.hidden = true; }
$(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeLightbox(); });

function setupForm(formId) {
  const form = $(formId);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = form.querySelector(".form-feedback");
    if (!form.checkValidity()) {
      feedback.textContent = "Please complete the highlighted fields with valid information.";
      feedback.className = "form-feedback error";
      form.reportValidity();
      return;
    }
    feedback.textContent = "Thank you — your message has been recorded for this demonstration. Connect a backend to receive submissions.";
    feedback.className = "form-feedback success";
    form.reset();
  });
}
setupForm("#admission-form");
setupForm("#contact-form");
