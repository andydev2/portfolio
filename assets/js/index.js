const navLinks = document.querySelectorAll(".links");
const sections = document.querySelectorAll("section");

let currentSection = "home";
window.addEventListener("scroll", () => {
  sections.forEach((sections) => {
    if (window.scrollY >= sections.offsetTop - sections.clientHeight / 1.5) {
      currentSection = sections.id;
    }
  });

  navLinks.forEach((navLinks) => {
    if (navLinks.href.includes(currentSection)) {
      document.querySelector(".active").classList.remove("active");
      navLinks.classList.add("active");
    }
  });
});
