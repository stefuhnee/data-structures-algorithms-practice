'use strict';

// call merge onto the sorted halves.

//mergeSort(arr)
// merge (mergeSort(arr, 0, mid), mergeSort(arr, mid + 1, arr.length))

// merge takes left and right arrays.
// pointers to left and right are compared, push lower to array (prefer left), advance lower pointer until one empties, concat the non-empty.

function mergeSort(arr) {
  console.log('merge sort called');
  let mid = Math.floor(arr.length / 2);
  let arrayLeft = arr.slice(0, mid);
  let arrayRight = arr.slice(mid);
  // while (arr.length > 1) {
  //   return merge(mergeSort(arrayLeft), mergeSort(arrayRight));
  // }
  // return arr;
  if (arr.length === 1) return arr;
  return merge(mergeSort(arrayLeft), mergeSort(arrayRight));
}

function merge(leftArray, rightArray) {
  console.log('merge called');
  console.log(leftArray, 'leftArray');
  console.log(rightArray, 'rightArray');
  let leftPointer = 0;
  let rightPointer = 0;
  let leftValue;
  let rightValue;
  let mergedArray = [];


  while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
    leftValue = leftArray[leftPointer];
    rightValue = rightArray[rightPointer];
    if (leftValue <= rightValue) {
      mergedArray.push(leftValue);
      leftPointer++;
    } else {
      mergedArray.push(rightValue);
      rightPointer++;
    }
  }

  if (!leftArray[leftPointer]) mergedArray = mergedArray.concat(rightArray.slice(rightPointer));
  if (!rightArray[rightPointer]) mergedArray = mergedArray.concat(leftArray.slice(leftPointer));

  console.log('merged array', mergedArray)
  return mergedArray;
}

let testArray1 = [1, 72, 18, -5, 12, 360, 7];

console.log(mergeSort(testArray1));
