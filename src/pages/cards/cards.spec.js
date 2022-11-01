import { divElements, printCards } from "./index.js";

describe("divElements", () => {
  it("Deve renderizar sem travar", () => {
    const el = divElements();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe("printCards", () => {
  it("Deve verificar se o board está na tela e mostrar que existem dois cards na tela", () => {
    const array = [{ imagem: "1", id: "2", }, { imagem: "2", id: "3" }];
    document.body.innerHTML = "<div id='board'></div>";
    printCards(array);
    const board = document.querySelector("#board");
    expect(board instanceof HTMLElement).toBe(true);
    const cards = document.querySelectorAll(".flip-card");
    expect(cards.length).toEqual(2);
  });

  it("Deve verificar se ao clicar no primeiro e após no segundo card, se ele contém a classe 'rotate-flip-card'", () => {
    const array = [{ imagem: "1", id: "2", }, { imagem: "2", id: "3" }];
    document.body.innerHTML = "<div id='board'></div>";
    printCards(array);
    const cards = document.querySelectorAll(".flip-card");
    expect(cards[0].classList.contains("rotate-flip-card")).toEqual(false);
    cards[0].click();
    expect(cards[0].classList.contains("rotate-flip-card")).toEqual(true);
    expect(cards[1].classList.contains("rotate-flip-card")).toEqual(false);
    cards[1].click();
    expect(cards[1].classList.contains("rotate-flip-card")).toEqual(true);
  });
});
