import { cardTemp } from "./htmltemplate.js";

const wpApi = "https://si.larssandell.no/wp-json/wp/v2/posts?categories=7";

export async function getProjectsApi() {
    try {
        const getResponse = await fetch(wpApi);
        const getData = await getResponse.json();
        // console.log(getResponse);
        // console.log(getData);
        // getData.forEach(() => console.log(getData));
        for (let i = 0; i < getData.length; i++) {
            // console.log("ForLoop", getData[i]);
            // cardTemp(getData, i);
            // console.log(getData[i].acf.alt_text);
        }
    } catch (err) {
        console.log(err);
    } finally {
        const faders = document.querySelectorAll(".fade-in");
        const sliders = document.querySelectorAll(".slide-in");

        const showOptions = {
            threshold: 0,
            rootMargin: "0px 0px -250px 0px",
        };

        const showOnScroll = new IntersectionObserver(function (
            entries,
            showOnScroll
        ) {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add("show");
                    showOnScroll.unobserve(entry.target);
                }
            });
        },
        showOptions);

        faders.forEach((fader) => {
            showOnScroll.observe(fader);
        });

        sliders.forEach((slider) => {
            showOnScroll.observe(slider);
        });
    }
}
