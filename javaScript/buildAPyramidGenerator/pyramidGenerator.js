function pyramid(pattern, rows, direction) {
  let pyramid = [];
  let spacing = 1;
  let rowSize = rows * 2 - 1;

  pyramid.push(pattern.repeat(rowSize));

  for (let i = 1; i < rows; i++) {
    rowSize -= 2;
    let newRow = ' '.repeat(spacing) + pattern.repeat(rowSize);

    if (direction === true) {
      pyramid.push(newRow);
    } else {
      pyramid.unshift(newRow);
    }

    spacing++;
  }

  // To make \n join at beginning and end
  pyramid.push('');
  pyramid.unshift('');

  return pyramid.join('\n');
}
