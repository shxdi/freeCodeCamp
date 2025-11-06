/*
Given a string date in the format YYYY-MM-DD, return the day of the week

Valid return days are:
"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"

Be sure to ignore time zones
*/

/*
1. getWeekday("2025-11-06") should return Thursday
2. getWeekday("1999-12-31") should return Friday
3. getWeekday("1111-11-11") should return Saturday
4. getWeekday("2112-12-21") should return Wednesday
5. getWeekday("2345-10-01") should return Monday
*/

function getWeekday(dateString) {
  let day = new Date(dateString);
  day = day.getUTCDay();

  switch (day) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
  }
}
