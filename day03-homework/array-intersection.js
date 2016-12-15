'use strict';

function findIntersection(arr1, arr2) {
  let point1 = 0;
  let point2 = 0;
  let answer = [];

  while (point1 < arr1.length && point2 < arr2.length) {
    if (arr1[point1] === arr2[point2]) {
      answer.push(arr1[point1]);
      point1++;
      point2++;
    }
    (arr1[point1] > arr2[point2]) ? point2++ : point1++;
  }
  return answer;
}

let testArray1 = [0, 4, 8, 11, 13];
let testArray2 = [1, 3, 8, 13, 14];

console.log(findIntersection(testArray1, testArray2));
