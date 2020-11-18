import { getAll } from "./di_jest_code";

describe("higher-order function", () => {
  it("has default behaviour if the mocks are not loaded", () => {
    // Act.
    const values = getAll("");

    // Assert.
    expect(values).toEqual(["A", "B", "C"]);
  });
});
