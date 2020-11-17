import { getAll } from ".";
const a = jest.fn((_param: string) => "a");
jest.mock("./namedexport", () => {
  return {
    a: (param: string) => a(param),
  };
});
const b = jest.fn((_param: string) => "b");
jest.mock("./defaultexport", () => {
  return {
    default: (param: string) => b(param),
  };
});
const c = jest.fn((_param: string) => "c");
jest.mock("./classexport", () => {
  return {
    C: function () {
      return {
        getValue: c,
      };
    },
  };
});

describe("with mocks", () => {
  it("is possible to check they were called", () => {
    const actual = getAll();
    expect(actual).toEqual(["a", "b", "c"]);
    expect(a).toHaveBeenCalled();
    expect(b).toHaveBeenCalled();
    expect(c).toHaveBeenCalled();
  });
  it("is possible to check they were called with parameter values", () => {
    const actual = getAll("paramValue");
    expect(actual).toEqual(["a", "b", "c"]);
    expect(a).toHaveBeenCalledWith("paramValue");
    expect(b).toHaveBeenCalledWith("paramValue");
    expect(c).toHaveBeenCalledWith("paramValue");
  });
  it("is possible to change the return value of mocks", () => {
    a.mockReturnValueOnce("x");
    b.mockReturnValueOnce("y");
    c.mockReturnValueOnce("z");
    const actual = getAll("paramValue");
    expect(actual).toEqual(["x", "y", "z"]);
  });
  it("after changing the return value of mocks, they go back to normal afterwards", () => {
    const actual = getAll("paramValue");
    expect(actual).toEqual(["a", "b", "c"]);
  });
});
