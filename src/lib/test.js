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

    /**
     * NOT working in babel. ..?
     * @returns {Test}
     */
    static empty() {
        return "stuff";
    }

    get prop() {
        return 'getter';
    }

    set prop(value) {
        console.log('setter: '+value);
    }
}