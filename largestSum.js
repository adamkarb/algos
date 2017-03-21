'use strict';

var testCase = [12, 654, 2456, 234, 928, 24234, 6432345, 34, 43, 76, 765];

function largestSum(arr) {

    var first = arr[0];
    var second = arr[1];

    if (second > first) {

        first = arr[1];
        second = arr[0];

    }

    for (var i = 2; i < arr.length; i++) {

        if (arr[i] > first) {

            second = first;
            first = arr[i];

        } else if (arr[i] > second) {

            second = arr[i];

        }

    }

    return first + second;

}

console.time('solution');
var answer = largestSum(testCase);
console.timeEnd('solution');
console.log('Answer', answer);
