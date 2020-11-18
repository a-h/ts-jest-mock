import { getAll } from ".";
jest.mock("./namedexport", () => ({
  a: jest.fn(() => "a"),
}));
jest.mock("./defaultexport", () => ({
  default: jest.fn(() => "b"),
}));
jest.mock("./classexport", () => ({
  C: () => ({
    getValue: () => "c",
  }),
}));

describe("with mocks", () => {
  it("returns lowercase values", () => {
    const actual = getAll();
    expect(actual).toEqual(["a", "b", "c"]);
  });
});
