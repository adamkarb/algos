'use strict';

var testCase = 'This is a great guinea pig.';

function reverseWordsInPlace(str) {
    
    // Split string by words, reverse it
    // Put them together in reverse order
    // Split everything by individual character
    // Reverse entire string and join them all back together
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
    
    
}

console.time('Solution');
var answer = reverseWordsInPlace(testCase);
console.timeEnd('Solution');
console.log('Answer', answer);
