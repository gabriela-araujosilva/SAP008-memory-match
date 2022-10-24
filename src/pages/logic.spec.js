import data from "../data/webdev/webdev.js";
import { shuffle, createDeckFrom } from "./logic.js";

describe("shuffle", () => {
    it("deve retornar um array com a mesma quantidade de elementos que o original", () => {
        const shuffled = shuffle(data.items);
        expect(shuffled.length).toBe(data.items.length);
    });
});

describe("createDeckFrom", () => {
    it("deve retornar todos os itens iniciais duplicados", () => {
        const deck = createDeckFrom(data.items);
        const count = {};
        deck.forEach((card) =>{
            if (!count[card.id]){
                count[card.id]=1;
            }

            else {
                count[card.id]+=1;
            }
        });
        const countArray = Object.values(count);
        countArray.forEach((number) => {
            expect(number).toBe(2);
        });
    });
});
