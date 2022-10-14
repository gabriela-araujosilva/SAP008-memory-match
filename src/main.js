import {printCards, divElements} from "./pages/cards/index.js";


const main = document.querySelector("#root");

window.addEventListener("load",() => {
    main.appendChild(divElements());
    main.appendChild(printCards());
});

