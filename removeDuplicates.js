'use strict';

var testCase = [12, '24', 'human', 'animals', 'cat'];

function removeDuplicates(arr) {

    var hold = {};
    var noDups = [];

    for (var i = 0; i < arr.length; i++) {

        if (!hold[arr[i]]) {

            hold[arr[i]] = true;
            noDups.push(arr[i]);

        }

    }

    return noDups;

}

console.time('solution');
var answer = removeDuplicates(testCase);
console.timeEnd('solution');
console.log('Answer', answer);
