'use strict';

var testCase = 99;

function fibonacci(index) {

    var map = {};

    function recur(i) {

        var value;

        if (i in map) {

            value = map[i];

        } else {

            if (i <= 2) {

                value = 1;

            } else {

                value = recur(i - 1) + recur(i - 2);

            }

        }

        map[i] = value;
        return value;

    }

    return recur(index);

}

console.time('Solution');
var answer = fibonacci(testCase);
console.timeEnd('Solution');
console.log('Answer', answer);
