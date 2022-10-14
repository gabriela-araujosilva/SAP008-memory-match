import data from "./../../data/webdev/webdev.js";

const dataDev = data.items;

const divElements = () => {
    const printElements = document.createElement("div");
    printElements.innerHTML = `
   <div class="elementos-container">
    <button type="button" class="botão" id="botão-shuffle">Jogar Novamente</button>
     <form>
        <div>
          <label class="text-redefinir-jogador">Redefinir jogador</label>
          <input type="text" id="input-redefinir-jogador"/>
        </div>
    </form>
    </div>  
    `;
  return printElements;
}; 


const printCards = () => {
    const container = document.createElement("div");
    let allCards = "";
    dataDev.map((personagem) => {
        allCards+=`
        <div class="quadro-card">
        <div><img class="quadro-imagem" src="${personagem.image}" id="${personagem.id}">
        </div>
        </div>
      `;
    });

  container.innerHTML = allCards + allCards;
  return container;
};

export {printCards, divElements, dataDev};