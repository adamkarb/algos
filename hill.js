'use strict';

// var testCase = generateTestCase(5000);
var testCase = [3, 3, 3, 3, 3, 3];

function hill(nums) {

    var len = nums.length;
    var temp = nums.slice(0);
    var maxDiff = 0;

    nums.sort((a, b) => {
        return a - b;
    });

    for (var i = 0; i < len; i++) {

        if (nums[i - 1] !== undefined && nums[i - 1] >= nums[i]) {

            nums[i] = nums[i - 1] + 1;

        }

        var oldVal = temp[i];
        var newVal = nums[i];

        if (oldVal < newVal && (newVal - oldVal) > maxDiff) {

            maxDiff = newVal - oldVal;

        } else if (oldVal - newVal > maxDiff) {

            maxDiff = oldVal - newVal;

        }

    }

    return maxDiff;

}

function generateTestCase(n) {

    var test = [];

    for (var i = 0; i < n; i++) {

        test.push(getRandBetween(-10000000000000, 100000000000000));

    }

    return test;

}

function getRandBetween(min, max) {

    return Math.round(Math.random() * (max - min) + min);

}

console.time('Solution');
var answer = hill(testCase);
console.timeEnd('Solution');
console.log('Answer', answer);
