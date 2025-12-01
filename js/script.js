// ---------------- HAMBURGER MENU ------------------
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

// Toggle menu on click
menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.innerHTML = isOpen ? "✕" : "☰";
});

// Close menu when clicking any link (mobile UX)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      menuButton.innerHTML = "☰";
      menuButton.setAttribute("aria-expanded", false);
    }
  });
});

// ---------------- FORM VALIDATION ------------------
const contactForm = document.getElementById("contact-form");
const messageDiv = document.getElementById("form-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    messageDiv.textContent = "Please fill all fields.";
    messageDiv.style.color = "red";
  } else {
    messageDiv.textContent = "Thank you! Your message has been sent.";
    messageDiv.style.color = "lightgreen";
    contactForm.reset();
  }
});
