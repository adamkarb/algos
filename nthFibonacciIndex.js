'use strict';

var testCase = 23;

function fibonacci(index) {

    var fibo = [0, 1];

    if (index <= 2) {
        return 1;
    }

    for (var i = 2; i <= index; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo[index];

}

console.time('Solution');
var answer = fibonacci(testCase);
console.timeEnd('Solution');
console.log('Answer', answer);
