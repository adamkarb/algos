'use strict';

// Give an array of integer elements and an integer `d`, consider all sequences of `d`
// consecutive elements in the array.  For each sequence compute the difference between
// the max and the min value of the elements in that sequence and name it the deviation

var testCase = generateTestCase(100000);
var sequenceLen = 45000;

function maxDeviationSequence(v, d) {

    var maxDiff = 0;

    for (var i = 0, len = v.length - d; i < len; i++) {

        var hi = 0;
        var lo = 0;

        for (var k = i, stop = i + d; k < stop; k++) {

            var val = v[k];

            if (val > hi) {

                hi = val;

            } else if (val < lo) {

                lo = val;

            }

        }

        var currDiff = hi - lo;

        if (currDiff > maxDiff) {

            maxDiff = currDiff;

        }

    }

    return maxDiff;

}

function generateTestCase(n) {

    var test = [];

    for (var i = 0; i < n; i++) {

        test.push(getRandBetween(-10000000000000000000000, 100000000000000000000000));

    }

    return test;

}

function getRandBetween(min, max) {

    return Math.round(Math.random() * (max - min) + min);

}

console.time('solution');
var answer = maxDeviationSequence(testCase, sequenceLen);
console.timeEnd('solution');
console.log('Answer', answer);
