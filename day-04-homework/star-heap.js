'use strict';

// array of size 1 million

/*   LEFT SIDE
      646343
   2534     3555
11   344  233  455
    RIGHT SIDE

Max heap!
Take in a star, look at the top of heap (array[0]) if input > top - return heap.
If input < top, replace top value with new star (arr[0] === input).
heap maxify ---> bubble down star until it is smaller than its parent.
// prefer the max of the children and swap it with that
*/

let starHeap = [{distance: 400}, {distance: 360}, {distance:370}, {distance:125}, {distance:6}, {distance:25}, {distance:78}];

function getClosestStars(star) {
  let distance = star.distance;
  if (distance >= starHeap[0].distance && starHeap.length === 1000000) return starHeap;
  starHeap[0] = star;
  let temp;
  let childOneIdx;
  let childTwoIdx;

  function placeStar(position) {
    childOneIdx = (2 * position) + 1;
    childTwoIdx = (2 * position) + 2;
    temp = starHeap[position];

    if (!starHeap[childOneIdx] && !starHeap[childTwoIdx]) return starHeap;

    if (distance > starHeap[childOneIdx].distance && distance > starHeap[childTwoIdx].distance) {
      return starHeap;
    }
    if (starHeap[position].distance < starHeap[childOneIdx].distance && starHeap[childOneIdx].distance > starHeap[childTwoIdx].distance) {
      starHeap[position] = starHeap[childOneIdx];
      starHeap[childOneIdx] = temp;
      return placeStar(childOneIdx);
    } else {
      starHeap[position] = starHeap[childTwoIdx];
      starHeap[childTwoIdx] = temp;
      return placeStar(childTwoIdx);
    }
  }
  return placeStar(0);
}

console.log(getClosestStars({distance: 500}));
