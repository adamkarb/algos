'use strict';

var numsList = [3, 6, 8, 4, 5];
var targetNum = 12;

function twosum(nums, target) {

    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var mapResult = map[target - nums[i]];
        if (mapResult !== undefined) {
            return [mapResult, nums[i]];
        }
        map[nums[i]] = nums[i];
    }

}

var answer = twosum(numsList, targetNum);

console.log('answer', answer);
