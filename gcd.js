'use strict';

var test1 = 12;
var test2 = 36;

function greatestCommonDenominator(a, b) {

    var gcd = 1;
    var divisor = 1;

    while (divisor <= a && divisor <= b) {

        if (a % divisor === 0 && b % divisor === 0) {

            gcd = divisor;

        }

        divisor++;

    }

    return gcd;

}

var answer = greatestCommonDenominator(test1, test2);
console.log('Answer', answer);
