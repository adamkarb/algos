'use strict';

// Given an array of integers:
// 1. rearrange the array such that all non-zero members appear on the left of the array (order is not important)
// 2. return the number of non-zero members
//
// e.g. [1,2,0,5,3,0,4,0] => [1,2,5,3,4,0,0,0] and return 5. The non-zero array members can be in any order.

// var testCase = generateTestCase(100);
var testCase = [4, 3, 2, 0, 0, 0, 0, 6, 7, 0, 0, 0, 8, 9, 7, 6, 5, 6, 0, 0, 0, 6, 8, 0];
console.log('Starting', testCase);

function strangeSort(arr) {

    var cursor = arr.length - 1;

    for (var i = 0; i < cursor; i++) {

        if (arr[i] === 0) {

            while (arr[cursor] === 0) {
                cursor--;
            }
            
            var temp = arr[cursor];
            arr[cursor] = arr[i];
            arr[i] = temp;

        }

    }

    console.log('Finishin', arr);
    return cursor;

}

function generateTestCase(numEl) {

    var test = [];

    for (var i = 0; i < numEl; i++) {

        test.push(randInRange(0, 20));
        var rand = Math.random();
        if (rand >= .5) {
            test.push(0);
        }

    }

    return test;

}

function randInRange(min, max) {

    return Math.round(Math.random() * (max - min) + min);

}

console.time('solution');
var answer = strangeSort(testCase);
console.timeEnd('solution');
console.log('Answer', answer);