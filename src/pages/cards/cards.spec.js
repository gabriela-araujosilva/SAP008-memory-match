import {divElements, printCards} from "./index.js";

describe("divElements", () => {
  it("should render without crashing", () => {
    const el = divElements();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe("printCards", () => {
  it("should render without crashing", () => {
    const array = [{imagem: "1", id: "2",}, {imagem: "2", id: "3"}];
    document.body.innerHTML="<div id='board'></div>";
    printCards(array);
    const board = document.querySelector("#board");
    expect(board instanceof HTMLElement).toBe(true);
    const cards = document.querySelectorAll(".flip-card");
    expect(cards.length).toEqual(2);
  });

  it("should play game", () => {
    const array = [{imagem: "1", id: "2",}, {imagem: "2", id: "3"}];
    document.body.innerHTML="<div id='board'></div>";
    printCards(array);
    const cards = document.querySelectorAll(".flip-card");
    expect(cards[0].classList.contains("rotate-flip-card")).toEqual(false);
    cards[0].click();
    expect(cards[0].classList.contains("rotate-flip-card")).toEqual(true);
    
  });
});



