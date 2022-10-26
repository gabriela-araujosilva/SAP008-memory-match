import {elementsHome} from "./index";

describe("homeText", () => {
  it("should render without crashing", () => {
    const el = elementsHome();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

