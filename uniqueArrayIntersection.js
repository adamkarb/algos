'use strict';

var testCase1 = [4, 5, 8, 2, 5, 34, 87, 15];
var testCase2 = [5, 5, 5, 5, 76, 34, 97, 45, 15, 34];

// Try to use only 1 loop (O(n))
// Find which is longest

function uniqueArrayIntersection(arr1, arr2) {
    
    var map = {};
    var intersect = [];
    
    for (var i = 0; i < arr1.length; i++) {
        
        map[arr1[i]] = 1;
        
    }
    
    for (var k = 0; k < arr2.length; k++) {
        
        if (map[arr2[k]] === 1) {
            
            intersect.push(arr2[k]);
            map[arr2[k]]++;
            
        }
        
    }
    
    return intersect;
    
}

console.time('Solution');
var answer = uniqueArrayIntersection(testCase1, testCase2);
console.timeEnd('Solution');
console.log('Answer', answer);
