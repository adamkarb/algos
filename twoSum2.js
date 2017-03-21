'use strict';

var testCase = [2, 6, 4, 3, 8, 9];
var target = 16;

function twoSum(numList, target) {

    var map = {};

    for (var i = 0; i < numList.length; i++) {

        var subtracted = target - numList[i];

        if (map[subtracted]) {

            return true; // or return numbers

        }

        map[numList[i]] = true;

    }

    return false;

}

var answer = twoSum(testCase, target);
console.log( 'answer', answer );
