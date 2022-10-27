import {elementsHome, elementsText} from "./index";

describe("elementsHome", () => {
  it("should render without crashing", () => {
    const el = elementsHome();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe("elementsText", () => {
  it("should render without crashing", () => {
    const el = elementsText();
    expect(el instanceof HTMLElement).toBe(true);
  });
});


