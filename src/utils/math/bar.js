import {sum} from "./foo";

export const distract = (a, b) => {
    return b - sum(a, a);
}

export class SomeClass {
    constructor(a) {
        this.a = a;
    }
}
