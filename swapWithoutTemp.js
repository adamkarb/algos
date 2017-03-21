'use strict';

var num1 = 13;
var num2 = 19;

// USING NO VARIABLES;

function swapNums(a, b) {

    // example notes
    // a = 3, b = 5

    b = b - a; // b === 5 - 3 === 2
    a = a + b; // a === 3 + 2 === 5 (A HAS NOW TURNED INTO ORIGINAL B)
    b = a - b; // b === 5 - 2 === 2

}

console.time('solution');
var answer = swapNums(num1, num2);
console.timeEnd('solution');
console.log('Answer', answer);
