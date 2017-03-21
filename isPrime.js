'use strict';

var testCase = 435341;

function isPrime(n) {

    var divisor = 2;
    var result = true;

    while (divisor < n) {

        if (n % divisor === 0) {

            return false;

        } else {

            divisor++;

        }


    }

    return true;

}

var answer = isPrime(testCase);
console.log('Answer', answer);


// Could make better by stopping at Math.floor(testCase/2) since if not divisible by
// 2 it couldn't go any further
