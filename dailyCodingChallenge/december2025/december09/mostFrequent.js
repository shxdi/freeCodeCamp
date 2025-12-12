/*
Given an array of elements, return the element that appears most frequently.

There will always be a single most frequent element.
*/

/*
1. mostFrequent(["a", "b", "a", "c"]) should return "a".
2. mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]) should return 2.
3. mostFrequent([true, false, "false", "true", false]) should return false.
4. mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]) should return 40.
*/

function mostFrequent(arr) {
  const map = new Map();
  let currentHighest;
  let currentCount = 0;

  arr.forEach((ele) => {
    if (map.has(ele)) {
      let count = map.get(ele);
      map.set(ele, ++count);
    } else {
      map.set(ele, 1);
    }
  });

  map.forEach((count, key) => {
    if (count > currentCount) {
      currentCount = count;
      currentHighest = key;
    }
  });

  return currentHighest;
}
