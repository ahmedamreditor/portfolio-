// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Navbar scroll effect
const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  nav.style.background = window.scrollY > 50
    ? "rgba(10,10,10,0.95)"
    : "rgba(10,10,10,0.6)";
});

// Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Filter videos — separate grids
function filterVideos(type, event) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  const reelsGrid = document.querySelector(".reels-grid");
  const adsGrid = document.querySelector(".ads-grid");

  if (type === "all") {
    reelsGrid.style.display = "grid";
    adsGrid.style.display = "flex";
  } else if (type === "reel") {
    reelsGrid.style.display = "grid";
    adsGrid.style.display = "none";
  } else if (type === "ad") {
    reelsGrid.style.display = "none";
    adsGrid.style.display = "flex";
  }
}

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Disable right click
document.addEventListener("contextmenu", (e) => e.preventDefault());