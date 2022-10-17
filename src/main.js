import {printCards, divElements, initialItems} from "./pages/cards/index.js";


const main = document.querySelector("#root");

window.addEventListener("load",() => {
    main.prepend(divElements());
    printCards(initialItems);
});

