// import { getProjectsApi } from "./components/apicall.js";

// getProjectsApi();

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const showOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
};

const showOnScroll = new IntersectionObserver(function (entries, showOnScroll) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("show");
            showOnScroll.unobserve(entry.target);
        }
    });
}, showOptions);

faders.forEach((fader) => {
    showOnScroll.observe(fader);
});

sliders.forEach((slider) => {
    showOnScroll.observe(slider);
});
