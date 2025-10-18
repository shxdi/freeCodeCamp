/*
Given an integer representing the number of pairs of socks you started with, and another 
integer representing how many wash cycles you have gone through, return the number of 
complete pairs of socks you currently have using the following constraints:

Every 2 wash cycles, you lose a single sock.
Every 3 wash cycles, you find a single missing sock.
Every 5 wash cycles, a single sock is worn out and must be thrown away.
Every 10 wash cycles, you buy a pair of socks.
You can never have less than zero total socks.
Rules can overlap. For example, on wash cycle 10, you will lose a single sock, throw away a 
single sock, and buy a new pair of socks.
Return the number of complete pairs of socks.
*/

/*
1. sockPairs(2, 5) should return 1.
2. sockPairs(1, 2) should return 0.
3. sockPairs(5, 11) should return 4.
4. sockPairs(6, 25) should return 3.
5. sockPairs(1, 8) should return 0.
*/

function sockPairs(pairs, cycles) {
  // Variable for socks
  let socks = pairs * 2;

  // Loop for running cycles
  for (let i = 0; i < cycles; i++) {
    // Variable for current cycle
    let currentCycle = i + 1;

    // If is a 2nd cycle
    if (currentCycle % 2 === 0) {
      socks -= 1;
    }

    // If is a 3rd cycle
    if (currentCycle % 3 === 0) {
      socks += 1;
    }

    // If is a 5th cycle
    if (currentCycle % 5 === 0) {
      socks -= 1;
    }

    // If is a 10th cycle
    if (currentCycle % 10 === 0) {
      socks += 2;
    }

    // If statement to not allow under 0
    if (socks < 0) {
      socks = 0;
    }
  }

  // Variable for remaining pairs
  let remainingPairs = Math.floor(socks / 2);

  return remainingPairs;
}
