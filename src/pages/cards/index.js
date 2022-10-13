import data from "./../../data/webdev/webdev.js";

const dataDev = data.items;

const btnPlainAgain = () => {
  const btnPrint = document.createElement("div");
  btnPrint.innerHTML = `
   <button type="button" class="botão">Jogar Novamente</button>
  `;

  return btnPrint;
};

const printCards = () => {
    const container = document.createElement("div");
    let allCards = "";
    dataDev.map((personagem) => {
      allCards+=`
      <div class="quadro-card">
      <div>
          <img class="quadro-imagem" src="${personagem.image}" id="${personagem.id}">
      </div>
      </div> 
    `;
    });

    container.innerHTML = allCards + allCards;

    return container;
};

export {printCards, btnPlainAgain};


