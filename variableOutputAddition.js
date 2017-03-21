'use strict';

var testCase1 = 123;
var testCase2 = 54;

function addition(a, b) {
    
    if (b) {
        return a + b;
    }
    
    return function(x) {
        return x + a;
    }
    
}

console.time('Solution');
var answer = addition(2)(3);
console.timeEnd('Solution');
console.log('Answer', answer);
