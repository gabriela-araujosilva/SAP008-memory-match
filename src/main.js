import {printCards, divElements, dataDev} from "./pages/cards/index.js";

const main = document.querySelector("#root");

window.addEventListener("load",() => {
    main.appendChild(divElements());
    main.appendChild(printCards());
});

  
  