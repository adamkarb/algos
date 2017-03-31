'use strict';

var testCase = [
    '{}()[] this is some nonsense {}',
    '{{{{{{{{{{{{{{{{[]}}}}}}}}}}}}}(}}}',
    'var stuff = function(arg) { log(arg); }'
];



function balancedBrackets(list) {

    var len = list.length;
    var open = {
        '{': '}',
        '(': ')',
        '[': ']'
    };
    var closed = {
        '}': true,
        ')': true,
        ']': true
    };

    var isStringBalanced = function(str) {

        var len = str.length;
        var stack = [];

        for (var i = 0; i < len; i++) {

            var char = str[i];

            if (open[char]) {

                stack.push(char);

            } else if (closed[char]) {

                if (char !== open[stack.pop()]) {

                    return false;

                }

            }

        }

        return stack.length === 0;

    };

    for (var i = 0; i < len; i++) {

        if (!isStringBalanced(list[i])) {

            return false;

        }

    }

    return true;

}

console.time('Solution');
var answer = balancedBrackets(testCase);
console.timeEnd('Solution');
console.log('Answer', answer);
