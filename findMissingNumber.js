'use strict';

var testCase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];

// Sum of linear sequence is
// sum = n * (n + 1) / 2
// n being length of sequence

// Formula if given upper and lower bounds.
// Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
// N is the upper bound and M is the lower bound

function findMissing(sequence) {

    var n = sequence.length + 1; // +1 because you know 1 member is missing
    var sum = 0;
    var expectedSum = (n * (n + 1)) / 2;

    for (var i = 0; i < sequence.length; i++) {

        sum += sequence[i];

    }

    return expectedSum - sum;

}

console.time('solution');
var answer = findMissing(testCase);
console.timeEnd('solution');
console.log('Answer', answer);
