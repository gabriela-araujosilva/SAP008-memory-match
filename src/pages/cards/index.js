import data from "./../../data/webdev/webdev.js";
import { shuffle } from "../logic.js";

const initialItems = data.items;

const divElements = () => {
  const printElements = document.createElement("div");
  printElements.innerHTML = `
   <div class="elementos-container">
    <button type="button" class="btn" id="btn-shuffle">Jogar Novamente</button>
     <form>
          <label class="text-redefinir-jogador">Redefinir jogador</label>
          <input type="text" id="input-redefinir-jogador"/>
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
        <div class="quadro-card">
        <div><img class="quadro-imagem" src="${personagem.image}" id="${personagem.id}">
        </div>
        </div>
      `;
  });

  container.innerHTML = allCards + allCards;
  
};

export { printCards, divElements, initialItems };
