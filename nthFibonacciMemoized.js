'use strict';

// We are going to implement memoization, so that recursion does not have
// to duplicate work

// O(n) space

var testCase = 23;

function nthFibMemo(n) {

    var hash = {};

    function memoFib(num) {

        var value;

        if (num in hash) {

            value = hash[num];

        } else {

            if (num < 2) {
               value = num;
           } else {
               value = memoFib(num - 1) + memoFib(num - 2);
           }

            hash[num] = value;

        }

        return value;

    };

    return memoFib(n);

}

console.time('Solution');
var answer = nthFibMemo(testCase);
console.timeEnd('Solution');
console.log('Answer', answer);
