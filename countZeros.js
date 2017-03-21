'use strict';

var testCase = 60;

function countZeros(num) {

    var count = 0;

    while (num > 0) {

        count += Math.floor(num / 10);
        console.log(`Count is now ${count}`);

        num = num / 10;
        console.log(`Num is now ${num}`);

    }

    return count;

}

console.time('solution');
var answer = countZeros(testCase);
console.timeEnd('solution');
console.log('Answer', answer);
