// If we want our fields to be called a, b and c we have to rename the imports because they clash with the field names on the class!
import { a as externalA } from "../namedexport";
import externalB from "../defaultexport";
import { C } from "../classexport";

export class Getter {
  constructor(a = externalA, b = externalB, c = new C()) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  a: (param: string) => string;
  b: (param: string) => string;
  c: C;
  getAll(param: string): Array<string> {
    return [this.a(param), this.b(param), this.c.getValue(param)];
  }
}

describe("class", () => {
  it("has default behaviour", () => {
    // Arrange.
    const getter = new Getter()

    // Act.
    const values = getter.getAll("");

    // Assert.
    expect(values).toEqual(["A", "B", "C"]);
  });
  it("can be mocked using dependency injection", () => {
    // Arrange.
    const newA = () => "x";
    const newB = () => "y";
    const newC = {
      getValue: () => "z",
      value: "z",
    };
    const getter = new Getter(newA, newB, newC)

    // Act.
    const values = getter.getAll("");

    // Assert.
    expect(values).toEqual(["x", "y", "z"]);
  });
});
