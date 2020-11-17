import { getAll } from ".";
jest.mock("./namedexport", () => {
  return {
    a: jest.fn(() => "a"),
  };
});
jest.mock("./defaultexport", () => {
  return {
    default: jest.fn(() => "b"),
  };
});
jest.mock("./classexport", () => {
  return {
    C: function () {
      return {
        getValue: () => "c",
      };
    },
  };
});

describe("with mocks", () => {
  it("returns lowercase values", () => {
    const actual = getAll();
    expect(actual).toEqual(["a", "b", "c"]);
  });
});
