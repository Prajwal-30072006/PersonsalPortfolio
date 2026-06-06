// Typing animation
const words = [
  "Full Stack Developer",
  "Web Developer",
  "Tech Enthusiast"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];

  if (isDeleting) {
    document.getElementById("typing").textContent =
      currentWord.substring(0, j--);
  } else {
    document.getElementById("typing").textContent =
      currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000); // pause before deleting
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length; // move to next word
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Dark mode toggle
document.getElementById("darkModeToggle").onclick = function () {
  document.body.classList.toggle("dark-mode");
};