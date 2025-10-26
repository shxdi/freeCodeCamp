/*
Given an integer number of seconds, return a string representing the same duration in the 
format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" 
is the number of seconds. Return the time using the following rules:

- Seconds: Should always be two digits.
- Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is 
less than one minute.
- Hours: Should be included only if they're greater than zero.
*/

/*
1. format(500) should return "8:20".
2. format(4000) should return "1:06:40".
3. format(1) should return "0:01".
4. format(5555) should return "1:32:35".
5. format(99999) should return "27:46:39".
*/

function format(seconds) {
  let formattedTime;
  let hours;
  let minutes = 0;

  if (seconds > 3599) {
    hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
  }
  if (seconds > 59) {
    minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (minutes < 10 && hours > 0) {
    minutes = '0' + minutes;
  }

  if (hours > 0) {
    formattedTime = `${hours}:${minutes}:${seconds}`;
  } else {
    formattedTime = `${minutes}:${seconds}`;
  }

  return formattedTime;
}
