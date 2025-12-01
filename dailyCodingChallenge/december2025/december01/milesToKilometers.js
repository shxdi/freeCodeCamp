/*
Given a distance in miles as a number, return the equivalent distance in kilometers.

The input will always be a non-negative number.
1 mile equals 1.60934 kilometers.
Round the result to two decimal places.
*/

/*
1. convertToKm(1) should return 1.61.
2. convertToKm(21) should return 33.8.
3. convertToKm(3.5) should return 5.63.
4. convertToKm(0) should return 0.
5. convertToKm(0.621371) should return 1.
*/

function convertToKm(miles) {
  return (miles * 1.60934).toFixed(2);
}
