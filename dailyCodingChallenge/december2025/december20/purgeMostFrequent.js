/*
Given an array of values, remove all occurrences of the most frequently occurring element 
    and return the resulting array.

If multiple values are tied for most frequent, remove all of them.
Do not change any of the other elements or their order.
*/

/*
1. purgeMostFrequent([1, 2, 2, 3]) should return [1, 3].
2. purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]) should 
    return ["a", "b", "b", "c", "c", "c"].
3. purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"]) should 
    return ["red", "green", "red", "green"].
4. purgeMostFrequent([5, 5, 5, 5]) should return [].
*/

function purgeMostFrequent(arr) {
  const elementCounts = {};
  let highestCount = 0;
  let mostFrequent;
  let arrCopy = arr;

  // Find count of each element
  for (let element of arr) {
    if (!elementCounts.hasOwnProperty(element)) {
      let sameInArr = arr.filter((ele) => ele === element);

      elementCounts[sameInArr.length] = element;
    }
  }

  // Find which element is most frequent
  for (let ele in elementCounts) {
    let currentCount = ele;

    if (currentCount > highestCount) {
      highestCount = currentCount;
      mostFrequent = elementCounts[ele];
    }
  }

  while (arrCopy.includes(mostFrequent)) {
    let index = arrCopy.indexOf(mostFrequent);

    arrCopy.splice(index, 1);
  }

  return arrCopy;
}
