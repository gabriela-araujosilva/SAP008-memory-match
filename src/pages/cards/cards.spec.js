import {divElements} from "./index.js";

describe("divElements", () => {
  it("should render without crashing", () => {
    const el = divElements();
    expect(el instanceof HTMLElement).toBe(true);
  });
});