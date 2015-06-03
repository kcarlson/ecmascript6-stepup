import {println, printMap} from 'lib/utils';
import {Test} from 'lib/test';


let test = new Test(1,2,3);

println ( test.test() );
printMap( test.map()  );

test.prop = "setter";
console.log("getter: " + test.prop);

let hooman;

{
    let first='bob',
        last = 'dole';

    hooman = { first, last };

    println ( hooman );
}

{
    println(first);
    let { first, last } = hooman;

    println ( first );
    println ( last );
}


function tag(strings, ...values) {
    for (let str of strings) {
        console.log(str);
    }
    for (let val of values) {
        console.log(val);
    }
}

let a= 'stuff', b = 'freaking';

tag`This ${a} is ${b} awesome!`


function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = gen();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
