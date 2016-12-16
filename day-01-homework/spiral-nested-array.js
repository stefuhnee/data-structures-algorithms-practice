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



function spiralize(inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    let row = inputArr[i];
    for (let j = 0; j < row.length; j++) {
      let value = row[j];
      let column = j;
    }
  }
}
