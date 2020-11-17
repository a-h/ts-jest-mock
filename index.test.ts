import { getAll } from ".";

describe("without mocks", () => {
  it("returns uppercase values", () => {
    const actual = getAll();
    expect(actual).toEqual(["A", "B", "C"]);
  });
});
