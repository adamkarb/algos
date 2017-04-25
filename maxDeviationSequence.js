'use strict';

// Give an array of integer elements and an integer `d`, consider all sequences of `d`
// consecutive elements in the array.  For each sequence compute the difference between
// the max and the min value of the elements in that sequence and name it the deviation

// Write a function that computes the maximum value among the deviations of all the sequences considered above
// Print the value

var testCase = generateTestCase(100000, -1000000, 100000000);
var sequenceLen = 40;

function maxDeviationSequence(v, d) {

    var sequenceMaxValue;
    var sequenceMaxIndex;
    var sequenceMinValue;
    var sequenceMinIndex;
    var solution = 0;
    var bestSolution = 0;
    var lowIndex = 1;

    // Initialize the vars with first d pass
    for (var i = 0; i < d; i++) {

        if (!sequenceMaxValue || v[i] >= sequenceMaxValue) {

            sequenceMaxValue = v[i];
            sequenceMaxIndex = i;

        }

        if (!sequenceMinValue || v[i] <= sequenceMinValue) {

            sequenceMinValue = v[i];
            sequenceMinIndex = i;

        }

    }

    solution = sequenceMaxValue - sequenceMinValue;

    for (var k = d, len = v.length; k < len; k++) {

        if (lowIndex > sequenceMinIndex) {

            var minInfo = getMin(v, lowIndex, lowIndex + d);
            sequenceMinValue = minInfo[0];
            sequenceMinIndex = minInfo[1];

        }

        if (lowIndex > sequenceMaxIndex) {

            var maxInfo = getMax(v, lowIndex, lowIndex + d);
            sequenceMaxValue = maxInfo[0];
            sequenceMaxIndex = maxInfo[1];

        }

        solution = sequenceMaxValue - sequenceMinValue;

        if (solution > bestSolution) {

            bestSolution = solution;

        }

        lowIndex++;

    }

    return bestSolution;

}

function getMin(arr, low, high) {

    var minValue;
    var minIndex;

    for (var i = low; i < high; i++) {

        if (!minValue || arr[i] <= minValue) {

            minValue = arr[i];
            minIndex = i;

        }

    }

    return [minValue, minIndex];

}

function getMax(arr, low, high) {

    var maxValue;
    var maxIndex;

    for (var i = low; i < high; i++) {

        if (!maxValue || arr[i] >= maxValue) {

            maxValue = arr[i];
            maxIndex = i;

        }

    }

    return [maxValue, maxIndex];

}

function generateTestCase(n, min, max) {

    var test = [];

    for (var i = 0; i < n; i++) {

        test.push(getRandBetween(min, max));

    }

    return test;

}

function getRandBetween(min, max) {

    return Math.round(Math.random() * (max - min) + min);

}

console.time('solution');
// var answer = maxDeviationSequence(testCase, sequenceLen);
var answer = maxDeviationSequence([6, 9, 4, 7, 4, 1], 3); // 6
console.timeEnd('solution');
console.log('Answer', answer);
