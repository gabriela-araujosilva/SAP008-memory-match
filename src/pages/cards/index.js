
import data from "./../../data/webdev/webdev.js";

const dataDev = data.items;

const btnPlainAgain = () => {
  const btnPrint = document.createElement("button");
  btnPrint.innerHTML = `
   <button type="button" class="btn">Jogar Novamente</button>
  `;
   return btnPrint;

};

const printCards = () => {
    const container = document.createElement("div");
    dataDev.forEach((personagem) => {
      container.innerHTML +=`
      <div class="quadro-card">
      <div>
          <img class="quadro-imagem" src="${personagem.image}">
      </div>
      </div> 
    `;
    });

    return container;
};

export {printCards, btnPlainAgain};


