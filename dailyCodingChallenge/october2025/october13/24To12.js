/* Instructions
Given a string representing a time of the day in the 24-hour format of "HHMM", 
return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".

The given input will always be a four-digit string in 24-hour time format, 
from "0000" to "2359".
*/

/* Checks
1. to12("1124") should return "11:24 AM".
2. to12("0900") should return "9:00 AM".
3. to12("1455") should return "2:55 PM".
4. to12("2346") should return "11:46 PM".
5. to12("0030") should return "12:30 AM".
*/

// Variable for finished string
let timeIn12;

function to12(time) {
  console.log(time.slice(0, 2));
  // For AM or PM
  let additional;

  if (time.slice(0, 2) === '00') {
    console.log('working');
    additional = ' AM';

    // Remove 12 hours if after 1pm
    time = '12' + time.slice(2, 4);

    // Get final string
    combineString(time, additional);
  } else if (time < 1200) {
    additional = ' AM';

    // Get final string
    combineString(time, additional);
  } else if (time > 1159 && time < 1300) {
    additional = ' PM';

    // Get final string
    combineString(time, additional);
  } else if (time > 1259) {
    additional = ' PM';

    // Remove 12 hours if after 1pm
    time -= 1200;

    // Get final string
    combineString(time, additional);
  }

  return timeIn12;
}

function combineString(time, additional) {
  // Turn time into a string
  time = time.toString();

  // Seperate hours and minutes
  let hour;
  let minute;
  // If time has 4 digits
  if (time.slice(3) !== '') {
    hour = time.slice(0, 2);
    minute = time.slice(2, 4);

    // If time has 3 digits
  } else if (time.slice(3) === '' || time.slice(0) === '0') {
    hour = time.slice(0, 1);
    minute = time.slice(1, 3);
  }

  // If first number in string is 0
  if (hour.slice(0, 1) === '0') {
    hour = hour.slice(1);
  }

  // Combine finished string
  timeIn12 = hour + ':' + minute + additional;
}
