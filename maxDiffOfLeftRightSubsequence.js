'use strict';

var testCase = generateTestCase(1000000);

function maxDiffOfLeftRightSubsequence(v) {

    var len = v.length;

    var leftMax = [];
    maxLeftSubarraySum(v, len, leftMax);

    var rightMax = [];
    maxRightSubarraySum(v, len - 1, rightMax);

    var invertArr = [];
    for (var i = 0; i < len; i++) {
        invertArr[i] = -v[i];
    }

    var leftMin = [];
    maxLeftSubarraySum(invertArr, len, leftMin);
    for (var i = 0; i < len; i++) {
        leftMin[i] = -leftMin[i];
    }

    var rightMin = [];
    maxRightSubarraySum(invertArr, len - 1, rightMin);
    for (var i = 0; i < len; i++) {
        rightMin[i] = -rightMin[i];
    }

    var result;

    for (var i = 0; i < len - 1; i++) {

        var absVal = Math.max(Math.abs(leftMax[i] - rightMin[i + 1]), Math.abs(leftMin[i] - rightMax[i + 1]));

        if (absVal > result || !result) {

            result = absVal;

        }

    }

    return result;

}

// Find max subarray sum for left
function maxLeftSubarraySum(arr, size, sumArr) {

    var maxSoFar = arr[0];
    var currMax = arr[0];
    sumArr[0] = maxSoFar;

    for (var i = 1; i < size; i++) {

        currMax = Math.max(arr[i], currMax + arr[i]);
        maxSoFar = Math.max(maxSoFar, currMax);
        sumArr[i] = maxSoFar;

    }

    return maxSoFar;

}

function maxRightSubarraySum(arr, n, sumArr) {

    var maxSoFar = arr[n];
    var currMax = arr[n];
    sumArr[n] = maxSoFar;

    for (var i = n - 1; i >= 0; i--) {

        currMax = Math.max(arr[i], currMax + arr[i]);
        maxSoFar = Math.max(maxSoFar, currMax);
        sumArr[i] = maxSoFar;

    }

    return maxSoFar;

}

function generateTestCase(n) {

    var test = [];

    for (var i = 0; i < n; i++) {

        test.push(getRandBetween(-1000, 1000));

    }

    return test;

}

function getRandBetween(min, max) {

    return Math.round(Math.random() * (max - min) + min);

}

console.time('solution');
// var answer = maxDiffOfLeftRightSubsequence([3, -5, 1, -2, 8, -2, 3, -2, 1]); // 15
var answer = maxDiffOfLeftRightSubsequence(testCase); // 15
console.timeEnd('solution');
console.log('Answer', answer);
