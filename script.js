// Mobile Menu Toggle
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Smooth scroll with offset for navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Scroll animations for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease-out forwards"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll(".project-card, .skill-card, .stat").forEach((el) => {
  el.style.opacity = "0"
  observer.observe(el)
})

// Form submission
const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(this)
  const name = this.querySelector('input[type="text"]').value

  // Simple validation feedback
  alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon!`)
  this.reset()
})

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 30px rgba(212, 100, 154, 0.15)"
  } else {
    navbar.style.boxShadow = "0 2px 20px rgba(212, 100, 154, 0.1)"
  }
})
