'use strict';

// http://www.geeksforgeeks.org/heaps-algorithm-for-generating-permutations
// 1. The algorithm generates (n-1)! permutations of the first n-1 elements,
//      adjoining the last element to each of these. This will generate all of
//      the permutations that end with the last element.
// 2. If n is odd, swap the first and last element and if n is even, then swap
//      the ith element (i is the counter starting from 0) and the last element
//      and repeat the above algorithm till i is less than n.
// 3. In each iteration, the algorithm will produce all the permutations that
//      end with the current last element.

var testCase = ['a', 'b', 'c'];

function swap(array, pos1, pos2) {

    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;

};

function heapsPermute(array, log, n) {

    n = n || array.length;

    if (n === 1) {

        log(array);

    } else {

        for (var i = 1; i <= n; i++) {

            heapsPermute(array, log, n - 1);

            if (n % 2) {

                // If even n, switch the first and second to last element
                var j = 1;

            } else {

                // If odd n, switch the i-th and second to last element
                var j = i;

            }

            swap(array, j - 1, n - 1);

        }

    }
};

console.time('Solution');
var answer = heapsPermute(testCase, console.log);
console.timeEnd('Solution');
// console.log('Answer', answer);
