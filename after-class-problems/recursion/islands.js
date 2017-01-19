'use strict';

let islands = [
       [0, 0, 1, 1, 0, 0],
       [0, 1, 1, 1, 1, 0],
       [1, 1, 1, 0, 0, 1],
       [1, 1, 1, 1, 0, 1],
       [0, 0, 0, 1, 1, 0],
];


function findPerim(matrix) {
  let answer = [];
  let perim = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        checkSides(i, j);
        answer.push(perim);
        perim = 0;
      }
    }
  }

  function checkSides(i, j) {
    matrix[i][j] = -1;

    function checkUp() {
      if (!matrix[i - 1] || !matrix[i - 1][j]) perim++;
      else if (matrix[i - 1][j] === 1) {
        checkSides(i - 1, j);
      }
    }

    function checkDown() {
      if (!matrix[i + 1] || !matrix[i + 1][j]) perim++;
      else if (matrix[i + 1][j] === 1) {
        checkSides(i + 1, j);
      }
    }

    function checkLeft() {
      if (!matrix[i][j - 1]) perim++;
      else if (matrix[i][j - 1] === 1) {
        checkSides(i, j - 1);
      }
    }

    function checkRight() {
      if (!matrix[i][j + 1]) perim++;
      else if (matrix[i][j + 1] === 1) {
        checkSides(i, j + 1);
      }
    }
    checkUp();
    checkDown();
    checkLeft();
    checkRight();
  }
  return answer;
}

console.log(findPerim(islands));
