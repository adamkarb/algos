'use strict';

var testCase = [1, 1, 6, 6, 7, 7, 12, 12, 14, 16, 16, 18, 18];

function findSingleElement(arr) {

    for (var i = 0; i < arr.length - 1; i += 2) {

        var currentVal = arr[i];
        var nextVal = arr[i + 1];

        if (currentVal !== nextVal) {

            return currentVal;

        }

    }

}

function findSingleElementBinary(array) {

    function search(arr, low, high) {

        if (low > high) {

            return 'None';

        }

        if (low === high) {

            return arr[low];

        }

        var middle = ((high - low) / 2) + low;

        // If even number index
        if (middle % 2 === 0) {

            if (arr[middle] === arr[middle + 1]) {

                return search(arr, middle + 2, high);

            } else {

                return search(arr, low, middle);

            }

        } else {

            if (arr[middle] === arr[middle - 1]) {

                return search(arr, middle + 1, high);

            } else {

                return search(arr, low, middle - 1);

            }

        }

    }

    return search(array, 0, array.length - 1);

}

console.time('Solution');
var answer = findSingleElementBinary(testCase);
console.timeEnd('Solution');
console.log('Answer', answer);
