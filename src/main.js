import {println, printMap} from 'lib/utils';
import {Test} from 'lib/test';


let test = new Test(1,2,3);

println ( test.test() );
printMap( test.map()  );

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

let a = 'stuff', b = 'freaking';

tag`This ${a} is ${b} awesome!`