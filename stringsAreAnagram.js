'use strict';

var testCase1 = 'mary';
var testCase2 = 'army';

// Assuming ascii character strings only

function areAnagrams(a, b) {
    
    a = a.toLowerCase();
    b = b.toLowerCase();
    
    a = a.split('').sort().join('');
    b = b.split('').sort().join('');
    
    return a === b;
    
}

console.time('Solution');
var answer = areAnagrams(testCase1, testCase2);
console.timeEnd('Solution');
console.log('Answer', answer);
