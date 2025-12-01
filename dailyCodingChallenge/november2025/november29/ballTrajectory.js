/*
Today's challenge is inspired by the video game Pong, which was released November 29, 1972.

Given a matrix (array of arrays) that includes the location of the ball (2), and the previous 
    location of the ball (1), return the matrix indices for the next location of the ball.

The ball always moves in a straight line.
The movement direction is determined by how the ball moved from 1 to 2.
The edges of the matrix are considered walls. If the balls hits a:
top or bottom wall, it bounces by reversing its vertical direction.
left or right wall, it bounces by reversing its horizontal direction.
corner, it bounces by reversing both directions.
*/

/*
1. getNextLocation([[0,0,0,0], 
                    [0,0,0,0], 
                    [0,1,2,0], 
                    [0,0,0,0]]) should return [2, 3].

2. getNextLocation([[0,0,0,0], 
                    [0,0,1,0], 
                    [0,2,0,0], 
                    [0,0,0,0]]) should return [3, 0].

3. getNextLocation([[0,2,0,0], 
                    [1,0,0,0], 
                    [0,0,0,0], 
                    [0,0,0,0]]) should return [1, 2].

4. getNextLocation([[0,0,0,0], 
                    [0,0,0,0], 
                    [2,0,0,0], 
                    [0,1,0,0]]) should return [1, 1].

5. getNextLocation([[0,0,0,0], 
                    [0,0,0,0], 
                    [0,0,1,0], 
                    [0,0,0,2]]) should return [2, 2].
*/

function findLocation(matrix) {
  let currentLocation;
  let previousLocation;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 2) {
        currentLocation = [i, j];
      } else if (matrix[i][j] === 1) {
        previousLocation = [i, j];
      }
    }
  }

  return [currentLocation, previousLocation];
}

function findDirection(current, previous) {
  if (current[0] === previous[0] && current[1] > previous[1]) {
    return 'right';
  } else if (current[0] === previous[0] && current[1] < previous[1]) {
    return 'left';
  } else if (current[1] === previous[1] && current[0] > previous[0]) {
    return 'down';
  } else if (current[1] === previous[1] && current[0] < previous[0]) {
    return 'up';
  } else if (current[0] < previous[0] && current[1] > previous[1]) {
    return 'top right';
  } else if (current[0] < previous[0] && current[1] < previous[1]) {
    return 'top left';
  } else if (current[0] > previous[0] && current[1] > previous[1]) {
    return 'bottom right';
  } else if (current[0] > previous[0] && current[1] < previous[1]) {
    return 'bottom left';
  }
}

function getNextLocation(matrix) {
  const height = matrix.length - 1;
  const width = matrix[0].length - 1;
  const locations = findLocation(matrix);
  const current = locations[0];
  const previous = locations[1];
  const direction = findDirection(current, previous);

  // If ball is at edge bouncing back to previous position
  if (
    (direction === 'up' && current[0] === 0) ||
    (direction === 'down' && current[0] === height) ||
    (direction === 'left' && current[1] === 0) ||
    (direction === 'right' && current[1] === width) ||
    (direction === 'top left' && current[0] === 0 && current[1] === 0) ||
    (direction === 'top right' && current[0] === 0 && current[1] === width) ||
    (direction === 'bottom left' &&
      current[0] === height &&
      current[1] === 0) ||
    (direction === 'bottom right' &&
      current[0] === height &&
      current[1] === width)
  ) {
    return previous;
  }

  // If direction 'up'
  if (direction === 'up') {
    return [current[0] - 1, current[1]];

    // If direction 'down'
  } else if (direction === 'down') {
    return [current[0] + 1, current[1]];

    // If direction 'left'
  } else if (direction === 'left') {
    return [current[0], current[1] - 1];

    // If direction 'right'
  } else if (direction === 'right') {
    return [current[0], current[1] + 1];

    // If direction 'top left' && at top border
  } else if (direction === 'top left' && current[0] === 0) {
    return [current[0] + 1, current[1] - 1];

    // If direction 'top left' && at left border
  } else if (direction === 'top left' && current[1] === 0) {
    return [current[0] - 1, current[1] + 1];

    // If direction 'top left'
  } else if (direction === 'top left') {
    return [current[0] - 1, current[1] - 1];

    // If direction 'top right' && at top border
  } else if (direction === 'top right' && current[0] === 0) {
    return [current[0] + 1, current[1] + 1];

    // If direction 'top right' && at right border
  } else if (direction === 'top right' && current[1] === width) {
    return [current[0] - 1, current[1] - 1];

    // If direction 'top right'
  } else if (direction === 'top right') {
    return [current[0] - 1, current[1] + 1];

    // If direction 'bottom left' && at bottom border
  } else if (direction === 'bottom left' && current[0] === height) {
    return [current[0] - 1, current[1] - 1];

    // If direction 'bottom left' && at left border
  } else if (direction === 'bottom left' && current[1] === 0) {
    return [current[0] + 1, current[1] + 1];

    // If direction 'bottom left'
  } else if (direction === 'bottom left') {
    return [current[0] + 1, current[1] - 1];

    // If direction 'bottom right' && at bottom border
  } else if (direction === 'bottom right' && current[0] === height) {
    return [current[0] - 1, current[1] + 1];

    // If direction 'bottom right' && at right border
  } else if (direction === 'bottom right' && current[1] === width) {
    return [current[0] + 1, current[1] - 1];

    // If direction 'bottom left'
  } else if (direction === 'bottom right') {
    return [current[0] + 1, current[1] + 1];
  }
}
