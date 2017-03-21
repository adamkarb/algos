'use strict';

var testCase = [56, 23, -23, 12, 84, 65, 3, 36, -3000, 47, 26, 75, -3, 95, 106];

// Find the largest difference of two numerical elements, but only
// if the lesser number comes first in the array sort

function largestDiffLessFirst(nums) {

    var currentMin = nums[0];
    var highestDiff = 0;

    for (var i = 1; i < nums.length; i++) {

        if (nums[i] < currentMin) {
            currentMin = nums[i];
        }

        var currentDiff = nums[i] - currentMin;

        if (currentDiff > highestDiff) {
            highestDiff = currentDiff;
        }

    }

    return highestDiff;

}

console.time('solution');
var answer = largestDiffLessFirst(testCase);
console.timeEnd('solution');
console.log('Answer', answer);
