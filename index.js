const About = document.querySelectorAll(".About");

About.forEach((About) => {
    About.addEventListener("click", () => {
        About.classList.toggle("active");
    });
});

var typed= new typed(".text", {
    Strings:["Frontend Devoloper", "Web Devoloper"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});