import cards from "./pages/cards/index.js";

const main = document.querySelector("#root");

window.addEventListener("load",() => {
    main.appendChild(cards());
} );

/*document.getElementById("root").appendChild(printCards());*/
