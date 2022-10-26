import {elementsHome} from "./index";

describe("elementsHome", () => {
  it("should render without crashing", () => {
    const el = elementsHome();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

