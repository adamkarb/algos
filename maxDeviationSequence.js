'use strict';

// Give an array of integer elements and an integer `d`, consider all sequences of `d`
// consecutive elements in the array.  For each sequence comput the difference between
// the max and the min value of the elements in that sequence and name it the deviation

var testCase = generateTestCase(30);
var sequenceLen = 5;

function maxDeviationSequence(v, d) {

    var len = v.length;
    var curMaxDev = 0;

    for (var i = 0; i < len; i++) {

        if (len - i < d) {

            return curMaxDev;

        } else {

            var temp = [];

            for (var k = 0; k < d; k++) {

                temp[k] = v[i + k];

            }

            temp.sort((a, b) => {
                return a - b;
            });

            var tempMaxDev = temp[temp.length - 1] - temp[0];

            if (tempMaxDev > curMaxDev) {

                curMaxDev = tempMaxDev;

            }

        }

    }

    return curMaxDev;

}

function generateTestCase(n) {

    var test = [];

    for (var i = 0; i < n; i++) {

        test.push(getRandBetween(1, 10000));

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
