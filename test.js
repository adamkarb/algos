'use strict';

var testCase;
var testCase2;

function balancedBracketsList(list) {

    var len = list.length;

    var bracketMap = {
        '{': '}',
        '(': ')',
        '[': ']'
    };
    var closed = {
        '}': true,
        ')': true,
        ']': true
    };

    var isBalanced = function(str) {

        var strLen = str.length;
        var stack = [];

        for (var i = 0; i < strLen; i++) {

            var char = str[i];

            if (bracketMap[char]) {

                stack.push(char);

            } else if (closed[char]) {

                if (char !== bracketMap[stack.pop()]) {

                    return false;

                }

            }

        }

        return stack.length === 0;

    };

    for (var i = 0; i < len; i++) {

        if (!isBalanced(list[i])) {

            return false;

        }

    }

    return true;

}

function maxSequenceDeviation(v, d) {

    var sequenceMaxValue;
    var sequenceMaxIndex;
    var sequenceMinValue;
    var sequenceMinIndex;
    var diff = 0;
    var maxDiff = 0;
    var lowIndex = 1;

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

    diff = sequenceMaxValue - sequenceMinValue;

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

        diff = sequenceMaxValue - sequenceMinValue;

        if (diff > maxDiff) {

            maxDiff = diff;

        }

        lowIndex++;

    }

    return maxDiff;

}

function getMax(arr, lo, hi) {

    var maxValue;
    var maxIndex;

    for (var i = lo; i < hi; i++) {

        if (!maxValue || arr[i] >= maxValue) {

            maxValue = arr[i];
            maxIndex = i;

        }

    }

    return [maxValue, maxIndex];

}

function getMin(arr, lo, hi) {

    var minValue;
    var minIndex;

    for (var i = lo; i < hi; i++) {

        if (!minValue || arr[i] <= minValue) {

            minValue = arr[i];
            minIndex = i;

        }

    }

    return [minValue, minIndex];

}

function isAnagram(a, b) {

    a = a.toLowerCase().split('').sort().join('');
    b = b.toLowerCase().split('').sort().join('');

    return a === b;

}

function hill(v) {

    var len = v.length;
    var temp = v.slice(0);
    v.sort((a, b) => { return a - b; });
    var maxDiff = Math.abs(v[0] - temp[0]);

    // v is in order, temp is original

    for (var i = 0; i < len; i++) {

        if (v[i - 1] !== undefined && v[i - 1] === v[i]) {

            v[i] = v[i - 1] + 1;

        }

        var a = v[i];
        var b = temp[i];

        if (a > b && a - b > maxDiff) {

            maxDiff = a - b;

        } else if (b > a && b - a > maxDiff) {

            maxDiff = b - a;

        }

    }

    return maxDiff;

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


console.time('Anagram Solution');
var answer = isAnagram('Army', 'Mary');
console.timeEnd('Anagram Solution');
console.log('Anagram Answer', answer);

console.time('Balanced Brackets Solution');
testCase = ['Hey this is just a string', '((this is some code in an iife) => {})();', '{{{{{{{{{{{{{{{{{{{(((((((((((())))))))))))}}}}}}}}}}}}}}}}}}}'];
var answer = balancedBracketsList(testCase);
console.timeEnd('Balanced Brackets Solution');
console.log('Balanced Brackets Answer', answer);

console.time('Hill Solution');
var answer = hill([5, 4, 3, 2, 8]);
console.timeEnd('Hill Solution');
console.log('Hill Answer', answer);

testCase = generateTestCase(100000, -1000000000, 10000000000);
testCase2 = 50000;
// testCase = [6, 9, 4, 7, 4, 1, 12, 3, 20, 4, 16, 19, 3, 2, 8];
// testCase2 = 3;
console.time('Max Sequence Deviation Solution');
var answer = maxSequenceDeviation(testCase, testCase2);
console.timeEnd('Max Sequence Deviation Solution');
console.log('Max Sequence Deviation Answer', answer);
