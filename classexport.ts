export class C {
  constructor() {
    this.value = "C";
  }
  value: string;
  getValue(_param: string) {
    return this.value;
  }
}
