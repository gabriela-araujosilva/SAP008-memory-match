import {printCards, divElements, dataDev} from "./pages/cards/index.js";

const main = document.querySelector("#root");

window.addEventListener("load",() => {
    main.appendChild(divElements());
    main.appendChild(printCards());
});

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };

  console.log(shuffle(dataDev));
  
  /*const btnShuflle = document.querySelector("#botão-shuffle");
  btnShuflle.addEventListener("click", shuffle(dataDev));*/