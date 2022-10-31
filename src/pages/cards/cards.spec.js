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
    const el = printCards(array);
    console.log(document.querySelector("#board"));
    expect(el instanceof HTMLElement).toBe(true);
  });
});

