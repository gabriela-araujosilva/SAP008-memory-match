import { printCards, divElements, initialItems } from "./pages/cards/index.js";
import { elementsText, elementsHome } from "./pages/home/index.js";
import { createDeckFrom, shuffle } from "./pages/logic.js";



const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        switch (window.location.hash) {
            case "#card":
                main.prepend(divElements());
                printCards(shuffle(createDeckFrom(initialItems)));
                break;
            case "":
                main.appendChild(elementsText());
                main.appendChild(elementsHome());
                break;
        }
    });
};

window.addEventListener("load", () => {
    main.appendChild(elementsText());
    main.appendChild(elementsHome());
    init();
});

