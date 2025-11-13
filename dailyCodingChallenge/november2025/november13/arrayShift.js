/*
Given an array and an integer representing how many positions to shift the array, return the \
shifted array.

A positive integer shifts the array to the left.
A negative integer shifts the array to the right.
The shift wraps around the array.
For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1]
*/

/*
1. shiftArray([1, 2, 3], 1) should return [2, 3, 1].
2. shiftArray([1, 2, 3], -1) should return [3, 1, 2].
3. shiftArray(["alpha", "bravo", "charlie"], 5) should return ["charlie", "alpha", "bravo"].
4. shiftArray(["alpha", "bravo", "charlie"], -11) should return ["bravo", "charlie", "alpha"].
5. shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15) should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4].
*/

function shiftArray(arr, n) {
  let shiftedArr = arr;
  let direction;
  let cycles = n;

  if (n < 0) {
    direction = 'right';
  } else if (n > 0) {
    direction = 'left';
  }

  if (cycles < 0) {
    cycles *= -1;
  }

  for (let i = 0; i < cycles; i++) {
    if (direction === 'right') {
      let ele = shiftedArr.pop();
      shiftedArr.unshift(ele);
    } else if (direction === 'left') {
      let ele = shiftedArr.shift();
      shiftedArr.push(ele);
    }
  }

  return shiftedArr;
}
