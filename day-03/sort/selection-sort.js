'use strict';

// while iterating through the array
// iterate through rest of the array
    // find smallest
    // swap the smallest with current value in outer loop.

function selectionSort(arr) {
  let min;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort([1,4,7,2,12,3]));
