'use strict';

/*
#1. Wave Array

[8:10]
//Given an array of integers, sort the array into a wave like array and return it,
   //In other words, arrange the elements into a sequence such that a1 >= a2 <= a3 >= a4 <= a5.....
       Given [1, 2, 3, 4]
       One possible answer : [2, 1, 4, 3]
       Another possible answer : [4, 1, 3, 2]
       NOTE : If there are multiple answers possible, ret lexicographically smallest -- [2, 1, 4, 3]
*/

// switch 0 & 1, 2 & 3, etc.
// you can assume that array is sorted.
// bubble sort?
// if you are on an even-indexed number (0, 2, 4), check that it is greater than the next number.
// if you are on an odd-indexed number (1, 3, 5), check that it is less than the next number.
// to get the lexicographically smallest array, put the second to the smallest number first.

function waveLikeArray(inputArr) {
  let current;
  let next;
  for (let i = 0; i < inputArr.length - 1; i+=2) {
    current = inputArr[i];
    next = inputArr[i+1];
    inputArr[i] = next;
    inputArr[i + 1] = current;
  }
  return inputArr;
}
// O(N) time... if we need to sort the array, O(N log N) time
// O(1) complexity

console.log(waveLikeArray([1,2,3,4]));
console.log(waveLikeArray([23,44,56,78,133,526]));
console.log(waveLikeArray([1,5,4]));
console.log('In other words, arrange the elements into a sequence such that a1 >= a2 <= a3 >= a4 <= a5.....');
