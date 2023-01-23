export const cardWrapper = document.querySelector(".card__wrapper");
const cardImage = document.querySelectorAll(".card__image");
console.log(cardImage);
const icons = document.querySelectorAll(".icons");
console.log(icons);

export function cardTemp(getData, i) {
    // console.log(getData[i]);
    // cardWrapper.innerHTML += `
    //                             <div class="card__grid">
    //                                             <img
    //                                                 src="${getData[i].featured_media_src_url}"
    //                                                 alt="${getData[i].acf.alt_text}"
    //                                                 class="grid__image card__image slide-in from-left"
    //                                             />
    //                                             <div id="test" class="grid__text slide-in from-right">
    //                                                 <p>${getData[i].paragraph}</p>
    //                                                 <p class="icons">
    //                                                     <a class="card__link" href="${getData[i].acf.github}">
    //                                                         <img
    //                                                             class="card__git"
    //                                                             src="./src/img/skills/Github-Light.svg"
    //                                                             alt="GitHub link"
    //                                                         />
    //                                                     </a>
    //                                                     <a class="card__link" href="${getData[i].acf.livelink}">
    //                                                         <img
    //                                                             class="card__git"
    //                                                             src="./src/img/skills/Netlify-Light.svg"
    //                                                             alt="Live link"
    //                                                         />
    //                                                     </a>
    //                                                 </p>
    //                                             </div>
    //                                         </div>
    // `;
}
