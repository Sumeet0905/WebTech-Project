// Slideshow Logic
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide(slideIndex);
}

// Auto-change slides every 10 seconds
let autoSlide = setInterval(() => {
  changeSlide(1);
}, 10000);

// Pause on hover
const slideshow = document.getElementById("slideshow");
slideshow.addEventListener("mouseenter", () => clearInterval(autoSlide));
slideshow.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => changeSlide(1), 10000);
});

// Show initial slide
showSlide(slideIndex);

// Profile dropdown toggle
const profileToggle = document.getElementById("profile-toggle");
const dropdown = document.getElementById("dropdown");

profileToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
  dropdown.style.flexDirection = "column";
});

// Close dropdown on outside click
document.addEventListener("click", (e) => {
  if (!profileToggle.contains(e.target)) {
    dropdown.style.display = "none";
  }
});
