/*
Given two integers (a number of rows and a number of columns), return a matrix (an array of 
arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:

[
  [0, 0, 0],
  [0, 0, 0]
]
*/

/*
1. buildMatrix(2, 3) should return [[0, 0, 0], [0, 0, 0]].
2. buildMatrix(3, 2) should return [[0, 0], [0, 0], [0, 0]].
3. buildMatrix(4, 3) should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]].
4. buildMatrix(9, 1) should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]].
*/

function buildMatrix(rows, cols) {
  let matrix = [];

  for (let i = 0; i < rows; i++) {
    matrix.push([]);

    for (let j = 0; j < cols; j++) {
      matrix[i].push(0);
    }
  }

  return matrix;
}
