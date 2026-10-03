// Welcome message
console.log("Welcome to Tony's Portfolio!");

// Project button
const projectButton = document.querySelector("button");

projectButton.addEventListener("click", function () {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});

// Navigation links
const links = document.querySelectorAll("nav a");

links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const section = document.querySelector(
            link.getAttribute("href")
        );

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});
const darkModeButton =
    document.querySelector("#darkModeButton");

darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "☀️ Light Mode";
    } else {
        darkModeButton.textContent = "🌙 Dark Mode";
    }

});
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();

});
// Mobile menu

const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }

});