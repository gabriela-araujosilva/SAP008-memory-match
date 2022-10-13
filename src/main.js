import {printCards, btnPlainAgain} from "./pages/cards/index.js";

const main = document.querySelector("#root");

window.addEventListener("load",() => {
    main.appendChild(btnPlainAgain());
    main.appendChild(printCards());
} );

