const About = document.querySelectorAll(".About");

About.forEach((About) => {
    About.addEventListener("click", () => {
        About.classList.toggle("active");
    });
});