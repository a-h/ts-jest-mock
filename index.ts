import { a } from "./namedexport";
import b from "./defaultexport";
import { C } from "./classexport";

export const getA = (param: string) => a(param);
export const getB = (param: string) => b(param);
export const getC = (param: string) => new C().getValue(param);

export const getAll = (param = "") => [getA(param), getB(param), getC(param)];

