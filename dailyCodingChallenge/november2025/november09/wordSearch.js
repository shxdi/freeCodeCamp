/*
Given a matrix (an array of arrays) of single letters and a word to find, return the start 
and end indices of the word in the matrix.

The given matrix will be filled with all lowercase letters (a-z).
The word to find will always be in the matrix exactly once.
The word to find will always be in a straight line in one of these directions:
left to right
right to left
top to bottom
bottom to top
For example, given the matrix:

[
  ["a", "c", "t"],
  ["t", "a", "t"],
  ["c", "t", "c"]
]
And the word "cat", return:

[[0, 1], [2, 1]]
Where [0, 1] are the indices for the "c" (start of the word), and [2, 1] are the indices for 
the "t" (end of the word).
*/

/*
1. findWord([["a", "c", "t"], 
             ["t", "a", "t"], 
             ["c", "t", "c"]],
             "cat") should return [[0, 1], [2, 1]].
2. findWord([["d", "o", "g"], 
             ["o", "g", "d"], 
             ["d", "g", "o"]], 
             "dog") should return [[0, 0], [0, 2]].
3. findWord([["h", "i", "s", "h"], 
             ["i", "s", "f", "s"], 
             ["f", "s", "i", "i"], 
             ["s", "h", "i", "f"]], 
             "fish") should return [[3, 3], [0, 3]].
4. findWord([["f", "x", "o", "x"], 
             ["o", "x", "o", "f"], 
             ["f", "o", "f", "x"], 
             ["f", "x", "x", "o"]], 
             "fox") should return [[1, 3], [1, 1]].
*/

function findWord(matrix, word) {
  let indices = [];
  let firstLetter = word[0];

  let possibleFirsts = findPossibleIndices(matrix, firstLetter);

  for (let i = 0; i < possibleFirsts.length; i++) {
    let row = possibleFirsts[i][0];
    let start = possibleFirsts[i][1];

    let isThisRow = checkRow(matrix[row], word, start);

    if (isThisRow === 'left') {
      indices.push(possibleFirsts[i]);
      indices.push([i, start - word.length + 1]);
    } else if (isThisRow === 'right') {
      indices.push(possibleFirsts[i]);
      indices.push([i, start + word.length - 1]);
    }
  }

  for (let i = 0; i < possibleFirsts.length; i++) {
    let column = [];
    let start = possibleFirsts[i][0];

    for (let row of matrix) {
      column.push(row[possibleFirsts[i][1]]);
    }

    let isThisColumn = checkColumn(column, word, start);

    if (isThisColumn === 'up') {
      let endRow = start - word.length + 1;
      let endColumn = possibleFirsts[i][1];

      indices.push(possibleFirsts[i]);
      indices.push([endRow, endColumn]);
    } else if (isThisColumn === 'down') {
      let endRow = start + word.length - 1;
      let endColumn = possibleFirsts[i][1];

      indices.push(possibleFirsts[i]);
      indices.push([endRow, endColumn]);
    }

    if (isThisColumn) {
      console.log(possibleFirsts[i][1]);
    }
  }

  return indices;
}

function findPossibleIndices(matrix, letter) {
  let indices = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === letter) {
        indices.push([i, j]);
      }
    }
  }

  return indices;
}

function checkRow(row, word, start) {
  let right = row.slice(start).join('');
  let left = row
    .slice(0, start + 1)
    .reverse()
    .join('');

  if (left.includes(word)) {
    return 'left';
  } else if (right.includes(word)) {
    return 'right';
  } else {
    return false;
  }
}

function checkColumn(column, word, start) {
  let down = column.slice(start).join('');
  let up = column
    .slice(0, start + 1)
    .reverse()
    .join('');

  if (down.includes(word)) {
    return 'down';
  } else if (up.includes(word)) {
    return 'up';
  } else {
    return false;
  }
}
