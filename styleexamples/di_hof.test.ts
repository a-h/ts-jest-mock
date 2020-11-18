import { a as externalA } from "../namedexport";
import externalB from "../defaultexport";
import { C } from "../classexport";

export const createGetter = (
  a = externalA,
  b = externalB,
  c = (param: string) => {
    return new C().getValue(param);
  }
) => (param: string) => [a(param), b(param), c(param)];

describe("higher-order function", () => {
  it("has default behaviour", () => {
    // Arrange.
    const getAll = createGetter();

    // Act.
    const values = getAll("");

    // Assert.
    expect(values).toEqual(["A", "B", "C"]);
  });
  it("can be mocked using dependency injection", () => {
    // Arrange.
    const newA = () => "x";
    const newB = () => "y";
    const newC = () => "z";
    const getAll = createGetter(newA, newB, newC);

    // Act.
    const values = getAll("");

    // Assert.
    expect(values).toEqual(["x", "y", "z"]);
  });
});
