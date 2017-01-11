'use strict';

/*
#2 (Stretch) assignment

[8:11]
Question:
Print a 2-d array (list of lists) in spiral form
Input:
       1    33   3   14      [ [1, 33, 3, 14],
       15   16   7   38        [15, 16, 7, 38],
       92   10  11  12         [92, 10, 11, 12],
       13   14  15  16         [13, 14, 15, 16] ]
Output:
1 33 3 14 38 12 16 15 14 13 92 15 16 7 11 10

Note it doesn't have to be a squre matrix.
*/

// row 0 -- print right all numbers.
// print down the last column.
// print left at the last row
// print up the first column, until row 0.
// print right until second to last column
// print down the second to last column
// print left at the second to last row
// print up the second to first column.

// define horizontal start, end, vertical start, end.
// define cases (up, down, right, left) and how far you go.

function spiralize(matrix) {
  let row = 0;
  let col = 0;
  let right = matrix[0].length;
  let down = matrix.length - 1;
  let left = right - 1;
  let up = down - 1;

  while (right > 0 || down > 0 || left > 0 || up > 0) {
    moveRight();
    moveDown();
    moveLeft();
    moveUp();
  }

  function moveRight() {
    for (let i = 0; i < right; col++, i++) console.log(matrix[row][col]);
    right -= 2;
    row++;
    col--;
  }

  function moveDown() {
    for (let i = 0; i < down; row++, i++) console.log(matrix[row][col]);
    down -= 2;
    col--;
    row--;
  }

  function moveLeft() {
    for (let i = 0; i < left; col--, i++) console.log(matrix[row][col]);
    left -= 2;
    row--;
    col++;
  }

  function moveUp() {
    for (let i = 0; i < up; row--, i++) console.log(matrix[row][col]);
    up -= 2;
    col++;
    row++;
  }
}


spiralize([[1,5,6,18],[2,4,8,10],[3,4,1,13],[5,13,11,20]]);
