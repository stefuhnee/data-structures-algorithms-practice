'use strict';

/*
Given some set of numbers (not necessarily sorted), arrange those numbers such that resultant number is the largest possible number that you can form with all possible arrangements. You cannot split up the numbers.
[95, 6, 42, 9, 99] ---> 99 9 95 6 42 (99,995,642)
*/

// look for 9s
// 6 and above  --> sort to the left
// 5 and below --> sort to the right?
// in place, then join.
// insertion sort
  // come across an element whose first digit is > current digit, move it to the left.
  // numbers with only 1 digit are prioritized and go at the beginning of their slot.
  // if digits > 1, compare 2nd digit amongst the numbers in their slot.
    // etc.

// VISHAL's SOLUTION:
/*
  turn numbers into string and compare them using a string compare method lexicographically.
  as your sort.
*/


function largestNumber(inputArray) {
  let compareVal;
  let currentVal;
  let compareValFirstDigit;
  let max = 0;
  let firstDigitMax = nthDigit(inputArray[0], 0);

  for (let i = 0; i < inputArray.length; i++) {
    currentVal = inputArray[i];
    console.log('current val', currentVal);

    for (let j = i++; j < inputArray.length; j++) {
      compareVal = inputArray[j];
      console.log('compare val', compareVal);
      compareValFirstDigit = nthDigit(compareVal, 0);

      console.log('first dig compare', compareValFirstDigit);
      console.log('max first dig', firstDigitMax);
      if (firstDigitMax < compareValFirstDigit) {
        firstDigitMax = compareValFirstDigit;
        max = j;
      }

      if (firstDigitMax === compareValFirstDigit) {
        if (compareDigits(currentVal, compareVal)) {
          max = j;
        }
      }
      if (currentVal !== max) swap(inputArray, i, max);
    }
    // is digit 1 greater than the current value (digit 1) considering all the digits?
    // if one digit, then yes automatically.
    // if first digit is the same, compare following digits one at a time until you find a digit that is larger (swap if necessary).
    // if the are entirely the same, continue.
  }
  return parseInt(inputArray.join(''));
}

function compareDigits(num1, num2) {
  let shorter;
  if (totalNumberOfDigits(num1) > totalNumberOfDigits(num2)) shorter = num2;
  else shorter = num1;
  for (let i = 0; i < shorter.length; i++) {
    if (nthDigit(num1, i) > nthDigit(num2, i)) {
      continue;
    } else return false;
  }
  return true;
}

function swap(arr, idx1, idx2) {
  console.log('swapping', arr[idx1], 'and', arr[idx2]);
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function totalNumberOfDigits(num) {
  return num.toString().length;
}

function nthDigit(num, place) {
  return parseInt(num.toString()[place]);
}

console.log(largestNumber([95, 6, 42, 9, 99]));
