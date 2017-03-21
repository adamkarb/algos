'use strict';

const NUMBER = 1234321;

function isNumberPalindrome(num) {

    return Number(String(num).split('').reverse().join('')) === num;

}

function isNumberPalindrome2(num) {

    var rev = 0;
    var n = num;

    while (n > 0) {

        var remainder = n % 10;
        rev = rev * 10 + remainder;
        n = n / 10;

    }

    return num === rev;

}

console.time('string method');
var answer = isNumberPalindrome(NUMBER);
console.timeEnd('string method');

console.time('while method');
var answer2 = isNumberPalindrome2(NUMBER);
console.timeEnd('while method');

console.log( 'answer1', answer );
console.log('answer2', answer);
