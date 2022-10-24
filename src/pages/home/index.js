const homeText = () => {
    const textHome = document.getElementById("board");
    textHome.innerHTML = `
    <div class="container-text">
    <div class="text-home"><h1>Memory: none; é um jogo <br> da memória baseado em algumas <br> linguagens
    e  ferramentas do mundo DEV.</h1>
    </div>
    `;
    return textHome;
};

const elementsHome = () => {
    const printHome = document.createElement("div");
    printHome.innerHTML = `
     <div class="elementos-container-home">
       <form class="definir-jogador">
            <label class="text-definir-jogador">Insira seu nome abaixo</label>
            <input class="input-definir-jogador" type="text" id="input-definir-jogador"/>
            <button type="button" class="btn-iniciar" id="btn-iniciar">Iniciar Partida</button>
          </form>
          
        </div>  
    `;

  const form = printHome.querySelector("form");
  const insertedName = printHome.querySelector("#input-definir-jogador");
  const printNameGamer = () => {
  const divNameGamer = document.querySelector("#print-bem-vinde");
    divNameGamer.innerHTML = `Bem-vinde: ${insertedName.value}`;
  };
  insertedName.addEventListener("keypress", printNameGamer);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

    return printHome;
};

export { homeText, elementsHome };


