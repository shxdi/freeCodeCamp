/*For today's challenge, you are given the surface temperature of a star in Kelvin (K) 
and need to determine its stellar classification based on the following ranges:

"O": 30,000 K or higher
"B": 10,000 K - 29,999 K
"A": 7,500 K - 9,999 K
"F": 6,000 K - 7,499 K
"G": 5,200 K - 5,999 K
"K": 3,700 K - 5,199 K
"M": 0 K - 3,699 K

Return the classification of the given star.*/

function classification(temp) {
  // Create if statement to check all ranges
  // Check if "M"
  if (temp <= 3699) {
    return 'M';

    // Check if "K"
  } else if (temp >= 3700 && temp <= 5199) {
    return 'K';

    // Check if "G"
  } else if (temp >= 5200 && temp <= 5999) {
    return 'G';

    // Check if "F"
  } else if (temp >= 6000 && temp <= 7499) {
    return 'F';

    // Check if "A"
  } else if (temp >= 7500 && temp <= 9999) {
    return 'A';

    // Check if "B"
  } else if (temp >= 10000 && temp <= 29999) {
    return 'B';

    // Check if "O"
  } else if (temp >= 30000) {
    return 'O';
  }

  return temp;
}
