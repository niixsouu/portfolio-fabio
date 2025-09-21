// Filter Gallery with staggered animation
function filterImages(category) {
    const images = document.querySelectorAll(".gallery-item");
    const buttons = document.querySelectorAll(".filters button");
  
    // Update active button
    buttons.forEach((btn) => btn.classList.remove("active"));
    events.target.classList.add("active");
  
    let delay = 0;
  
    images.forEach((img) => {
      img.classList.remove("show"); // reset animation
  
      if (category === "all" || img.classList.contains(category)) {
        img.classList.remove("hide");
        setTimeout(() => {
          img.classList.add("show");
        }, delay);
        delay += 150; // stagger delay between images
      } else {
        img.classList.add("hide");
      }
    });
  }

  // Portfolio Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active class from all
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    portfolioItems.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        }, 100);
      } else {
        item.style.opacity = "0";
        item.style.transform = "scale(0.8)";
        setTimeout(() => {
          item.style.display = "none";
        }, 300);
      }
    });
  });
});

  
  
  
  // Lightbox
  function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
// Smooth scroll (for older browsers fallback)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
 // Event Galleries
const eventImages = {
    wedding: [
      "images/wedding1.jpg",
      "images/wedding2.jpg",
      "images/wedding3.jpg"
    ],
    gala: [
      "images/event1.jpg",
      "images/event2.jpg",
      "images/event3.jpg"
    ],
    portrait: [
      "images/portrait1.jpg",
      "images/portrait2.jpg",
      "images/portrait3.jpg"
    ],
    wildlife: [
      "images/nature1.jpg",
      "images/nature2.jpg",
      "images/nature3.jpg"
    ]
  };
  
  function openEventGallery(eventKey) {
    const gallery = document.getElementById("event-gallery");
    gallery.innerHTML = ""; // Clear old content
  
    eventImages[eventKey].forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.onclick = () => openLightbox(img); // reuse main lightbox
      gallery.appendChild(img);
    });
  
    document.getElementById("event-lightbox").style.display = "flex";
  }
  
  function closeEventGallery() {
    document.getElementById("event-lightbox").style.display = "none";
  }
// Remove intro after animation
window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
    }, 4000); // matches animation-delay + fadeOut duration
  });
  function enterPortfolio() {
    const intro = document.getElementById("intro");
    intro.style.animation = "fadeOut 1s ease forwards";
    setTimeout(() => {
      intro.style.display = "none";
    }, 1000); // wait for fadeOut animation
  }
// WhatsApp Contact Form
document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const phoneNumber = "0781724286"; // <-- replace with your WhatsApp number
    const text = `Hello, my name is ${islem}.\nEmail: ${email}\nMessage: ${message}`;
  
    const url = `https://wa.me/${078}?text=${encodeURIComponent(text)}`;
  
    window.open(url, "_blank");
  });
 // Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");

// Check saved preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
// Scroll animation for Energy words (with reset)
const energyWords = document.querySelectorAll(".energy-words .word");

window.addEventListener("scroll", () => {
  const energySection = document.getElementById("energy");
  const sectionTop = energySection.getBoundingClientRect().top;
  const sectionBottom = energySection.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;

  // Check if section is in view
  if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
    energyWords.forEach((word, index) => {
      setTimeout(() => {
        word.classList.add("show");
      }, index * 500); // delay each word
    });
  } else {
    // Reset when out of view
    energyWords.forEach(word => word.classList.remove("show"));
  }
});
// Animated Counter
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function animateCounters() {
  if (counterStarted) return; // run only once
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = target / 200; // adjust for speed

    const updateCount = () => {
      if (count < target) {
        count += Math.ceil(speed);
        counter.textContent = count.toLocaleString();
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };

    updateCount();
  });
  counterStarted = true;
}

// Run when stats section enters view
window.addEventListener("scroll", () => {
  const statsSection = document.getElementById("stats");
  const sectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    animateCounters();
  }
});
// Custom Energy Cursor
const cursor = document.querySelector(".cursor");
const galleryItems = document.querySelectorAll(".gallery-item");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// Reset cursor color
function resetCursor() {
  cursor.className = "cursor";
}

// Add category-based hover effects
galleryItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    if (item.classList.contains("wedding")) {
      cursor.classList.add("wedding");
    } else if (item.classList.contains("nature")) {
      cursor.classList.add("nature");
    } else if (item.classList.contains("portrait")) {
      cursor.classList.add("portrait");
    } else if (item.classList.contains("event")) {
      cursor.classList.add("event");
    }
  });
  item.addEventListener("mouseleave", resetCursor);
});

// Click ripple effect
document.addEventListener("click", () => {
  cursor.classList.add("ripple");
  setTimeout(() => {
    cursor.classList.remove("ripple");
  }, 500);
});
// Typing effect for intro name
const introName = document.querySelector(".intro-name");
const introText = "Arab islem | Photographer"; // <-- change your name
let i = 0;

function typeWriter() {
  if (i < introText.length) {
    introName.textContent += introText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    // trigger camera flash once typing is done
    document.querySelector(".intro-camera").classList.add("flash");
  }
}
setTimeout(typeWriter, 1000);

// Floating particles
const particlesContainer = document.querySelector(".particles");
for (let i = 0; i < 20; i++) {
  const particle = document.createElement("span");
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDuration = 5 + Math.random() * 10 + "s";
  particle.style.opacity = Math.random();
  particle.style.width = particle.style.height = Math.random() * 6 + "px";
  particlesContainer.appendChild(particle);
}

// Hide intro after animation
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").classList.add("fade-out");
  }, 7000); // 7 seconds then fade out
});


            