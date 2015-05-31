export class Test {
    constructor(...arr) {
        this.arr = arr;
    }

    test() {
        return this.arr
            .map(v => v + ": ")
            .reduce((a,b) => a + b);
    }

    map() {
        return new Map()
            .set(0, 'zero')
            .set('fizz', 42);
    }
}