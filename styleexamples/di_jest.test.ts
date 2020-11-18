import { getAll } from "./di_jest_code";

// Arrange.
const mockA = jest.fn(() => "x");
jest.mock("../namedexport", () => ({
  a: () => mockA(),
}));
const mockB = jest.fn(() => "y");
jest.mock("../defaultexport", () => ({
  default: () => mockB(),
}));
const mockC = jest.fn(() => "z");
jest.mock("../classexport", () => ({
  C: () => ({
    getValue: ()=> mockC(),
  }),
}));

describe("higher-order function", () => {
  it("can be mocked with jest", () => {
    // Act.
    const values = getAll("");

    // Assert.
    expect(values).toEqual(["x", "y", "z"]);
    expect(mockA).toHaveBeenCalled()
    expect(mockB).toHaveBeenCalled()
    expect(mockC).toHaveBeenCalled()
  });
});
