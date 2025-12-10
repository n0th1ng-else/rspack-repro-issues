import {SomeClass} from "./bar";

export const sum = (a, b) => {
    const cl = new SomeClass(a)
    return cl.a + b;
}