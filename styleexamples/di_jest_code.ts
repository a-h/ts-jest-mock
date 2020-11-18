import { a } from "../namedexport";
import b from "../defaultexport";
import { C } from "../classexport";

export const getAll = (param: string) => [
  a(param),
  b(param),
  (new C()).getValue(param),
];
