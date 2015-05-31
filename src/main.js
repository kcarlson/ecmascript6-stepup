
import {println} from 'lib/utils';

class Test {

    test() {
        return [1,2,3].map(v => v + ": ");
    }
}

var test = new Test;
println( test.test() );