/* Instructions -
Given a 2D array representing a map of the ocean floor that includes a hidden treasure, 
and an array with the coordinates ([row, column]) for the next dive of your treasure search, 
return "Empty", "Found", or "Recovered" using the following rules:

The given 2D array will contain exactly one unrecovered treasure, which will occupy multiple 
cells.

Each cell in the 2D array will contain one of the following values:

"-": No treasure.
"O": A part of the treasure that has not been found.
"X": A part of the treasure that has already been found.
If the dive location has no treasure, return "Empty".

If the dive location finds treasure, but at least one other part of the treasure remains 
unfound, return "Found".

If the dive location finds the last unfound part of the treasure, return "Recovered".

For example, given:

[
  [ "-", "X"],
  [ "-", "X"],
  [ "-", "O"]
]
And [2, 1] for the coordinates of the dive location, return "Recovered" because the dive 
found the last unfound part of the treasure.

*/

/* Tests - 
1. dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]) 
should return "Recovered".
2. dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]) 
should return "Empty".
3. dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]) 
should return "Found".
4. dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]) 
should return "Found".
5. dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]) 
should return "Recovered".
6. dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]) 
should return "Empty".
*/

function dive(map, coordinates) {
  // Varibles for search
  let row = coordinates[0];
  let column = coordinates[1];

  // Variable for how many treasures exist on ocean floor
  let treasures = 0;
  // Loop to find how many treasures are on the ocean floor
  for (let i = 0; i < map.length; i++) {
    // Variable for current coordinate
    let currentCoordinate = map[i];
    // Loop to check each map coordinate
    for (let i = 0; i < currentCoordinate.length; i++) {
      if (currentCoordinate[i] === 'O') {
        treasures++;
      }
    }
  }

  // Find target coordinate
  let targetCoordinate = map[row][column];

  // If statement for what we found at targetCoordinate
  // If we found nothing
  if (targetCoordinate === '-') {
    return 'Empty';
    // If we found a treasure that was previously found
  } else if (targetCoordinate === 'X') {
    return 'Found';
  } // If we found a treasure that was unfound and but it was not the last unfound
  else if (targetCoordinate === 'O' && treasures > 1) {
    return 'Found';
    // If we found a treasure that was unfound and it was the last unfound
  } else if (targetCoordinate === 'O' && treasures === 1) {
    return 'Recovered';
  }
}
