'use strict';

var testCase = [45, 23, 7, 65, -29, 3, 8, 45, -12, 54, -19, -65, 123, -93];

function largestProdOf3(numList) {

    numList.sort(sortNums);

    var len = numList.length;
    var prod1 = 1;
    var prod2 = 1;

    if (len < 4) {
        for (var i = 0; i < len; len++) {
            prod1 *= numList[i];
        }
        return prod1;
    }

    prod1 = numList[0] * numList[1] * numList[len - 1];

    for (var k = len - 1; k >= len - 3; k--) {

        prod2 *= numList[k];

    }

    if (prod1 > prod2) { return prod1; }
    return prod2;

}

function sortNums(a, b) {

    // negative result puts a first
    // positive result puts b first
    // 0 leaves as is
    return a - b;

}

console.time('solution');
var answer = largestProdOf3(testCase);
console.timeEnd('solution');
console.log('Answer', answer);
