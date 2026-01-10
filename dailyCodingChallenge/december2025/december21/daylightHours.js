/*
December 21st is the winter solstice for the northern hemisphere and the summer solstice for 
    the southern hemisphere. That means it's the day with the least daylight in the north and 
    the most daylight in the south.

Given a latitude number from -90 to 90, return a rough approximation of daylight hours on the 
    solstice using the following table:

Latitude	Daylight Hours
-90	        24
-75	        23
-60	        21
-45	        15
-30	        13
-15	        12
0	        12
15	        11
30	        10
45	        9
60	        6
75	        2
90	        0

If the given latitude does not exactly match a table entry, use the value of the closest 
    latitude.
*/

/*
1. daylightHours(45) should return 9.
2. daylightHours(0) should return 12.
3. daylightHours(-90) should return 24.
4. daylightHours(-10) should return 12.
5. daylightHours(23) should return 10.
6. daylightHours(88) should return 0.
7. daylightHours(-33) should return 13.
8. daylightHours(70) should return 2.
*/

function daylightHours(latitude) {
  if (latitude <= -81.5) {
    return 24;
  } else if (latitude > -81.5 && latitude <= -66.5) {
    return 23;
  } else if (latitude > -66.5 && latitude <= -51.5) {
    return 21;
  } else if (latitude > -51.5 && latitude <= -36.5) {
    return 15;
  } else if (latitude > -36.5 && latitude <= -21.5) {
    return 13;
  } else if (latitude > -21.5 && latitude <= 8.5) {
    return 12;
  } else if (latitude > 8.5 && latitude <= 21.5) {
    return 11;
  } else if (latitude > 21.5 && latitude <= 36.5) {
    return 10;
  } else if (latitude > 36.5 && latitude <= 51.5) {
    return 9;
  } else if (latitude > 51.5 && latitude <= 66.5) {
    return 6;
  } else if (latitude > 66.5 && latitude <= 81.5) {
    return 2;
  } else if (latitude >= 81.5) {
    return 0;
  }
}
