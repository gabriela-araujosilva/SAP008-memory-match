import data from "./../../data/webdev/webdev.js";
import { shuffle } from "../logic.js";

const initialItems = data.items;

const divElements = () => {
  const printElements = document.createElement("div");
  printElements.innerHTML = `
   <div class="elementos-container">
    <button type="button" class="btn" id="btn-shuffle">Jogar Novamente</button>
     <form class="redefinir-jogador">
          <label class="text-redefinir-jogador">Redefinir jogador</label>
          <input class="input-redefinir-jogador" type="text" id="input-redefinir-jogador"/>
        </form>
      </div>  
  `;
  const form = printElements.querySelector("form");
  const insertedName = printElements.querySelector("#input-redefinir-jogador");
  const printNameGamer = () => {
  const divNameGamer = document.querySelector("#print-bem-vinde");
    divNameGamer.innerHTML = `Bem-vinde: ${insertedName.value}`;
  };
  insertedName.addEventListener("keypress", printNameGamer);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });


  const btnShuffle = printElements.querySelector("#btn-shuffle");
  btnShuffle.addEventListener("click", (e) => {
    e.preventDefault();
    const shuffledItems = shuffle(initialItems);
    printCards(shuffledItems);
  });

  return printElements;
};


const printCards = (data) => {
  const container = document.getElementById("board");
  let allCards = "";
  data.map((personagem) => {
    allCards += `
      <div data-id=${personagem.id} class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-back">
            <img class="img-back" src="./../../images/computador-back-card.png">
          </div>
          <div class="flip-card-front">
            <img class="img-front" src="${personagem.image}" id="${personagem.id}">
          </div>
        </div>
      </div>
      `;
    });

    container.innerHTML = allCards + allCards;

    const clickFlipCard = container.querySelectorAll(".flip-card");
    clickFlipCard.forEach((item) => {
      item.addEventListener("click", () => {        
        item.classList.add("rotate-flip-card");
      });
    });
};

/*se o id for igual aplico isso: document.querySelectorAll(`[data-id="${id}"]`).style.pointerEvents = 'none'*/




export { printCards, divElements, initialItems };
