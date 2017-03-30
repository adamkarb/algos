'use strict';

var testCase = 20;

function factorial(n) {

    if (n <= 1) {

        return 1;

    } else {

        return n * factorial(n - 1);

    }

}

console.time('Solution');
var answer = factorial(testCase);
console.timeEnd('Solution');
console.log('Answer', answer);
