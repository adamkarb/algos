'use strict';

var testCase = 'function stuff() { console.log("hey this is some stuff"); }';

function isBalanced(str) {

    var len = str.length;
    var stack = [];
    var bracketMap = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    var closedMap = {
        '}': true,
        ']': true,
        ')': true
    };

    for (var i = 0; i < len; i++) {

        var char = str[i];

        // if char is an opener
        if (bracketMap[char]) {

            stack.push(char);

        // if char is a closer
        } else if (closedMap[char]) {

            // if closing character is not next due on stack
            if (char !== bracketMap[stack.pop()]) {

                return false;

            }

        }

    }

    return stack.length === 0;

}

console.time('solution');
var answer = isBalanced(testCase);
console.timeEnd('solution');
console.log('Answer', answer);
