'use strict';

var testCase = generateTestCase(10000);
var target = 7500;

function find(nums, target) {
    
    function binarySearch(nums) {

        var leftBound = 0;
        var rightBound = nums.length - 1;
        var mid;
        var element;
        
        while (leftBound <= rightBound) {
            
            mid = Math.floor((leftBound + rightBound) / 2);
            element = nums[mid];
            
            if (element < target) {
                
                leftBound = mid + 1;
                
            } else if (element > target) {
                
                rightBound = mid - 1;   
                             
            } else {
                
                return mid;
                
            }
            
        }
        
        return -1;

    }
    
    return binarySearch(nums);
    
}

function generateTestCase(amount) {
    
    var test = [];
    
    for (var i = 0; i < amount; i += 5) {
        
        test.push(i);
        
    }
    
    return test;
    
}

console.time('solution');
var answer = find(testCase, target);
console.timeEnd('solution');
console.log('Answer', answer);
