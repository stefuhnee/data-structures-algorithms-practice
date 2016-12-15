'use strict';

// call merge onto the sorted halves.

//mergeSort(arr)
// merge (mergeSort(arr, 0, mid), mergeSort(arr, mid + 1, arr.length))

// merge takes left and right arrays.
// pointers to left and right are compared, push lower to array (prefer left), advance lower pointer until one empties, concat the non-empty.

function mergeSort(arr) {
  let mid = Math.floor(arr.length / 2);
  console.log('mid', mid);
  while (arr.length > 1) {
    merge(mergeSort(arr.slice(0, mid), mergeSort(arr.slice(mid, arr.length))));
  }
}

function merge(leftArray, rightArray) {
  console.log(leftArray, 'leftArray');
  console.log(rightArray, 'rightArray');
  let leftPointer = 0;
  let rightPointer = 0;
  let leftValue;
  let rightValue;
  let mergedArray = [];
  let longerArray;
  let shorterArray;

  if (leftArray && leftArray.length >= rightArray.length) {
    longerArray = leftArray;
    shorterArray = rightArray;
  } else {
    longerArray = rightArray;
    shorterArray = leftArray;
  }

  for (let i = 0; i < longerArray.length; i++) {
    if (!shorterArray[i]) {
      mergedArray.concat(longerArray.slice(i));
      break;
    }
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
  return mergedArray;
}

console.log(mergeSort([3,4,1,9,3,233,11]));
