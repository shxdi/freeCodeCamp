/*
Given the current temperature of a room in Fahrenheit and a target temperature in Celsius, 
return a string indicating how to adjust the room temperature based on these constraints:

Return "Heat: X degrees Fahrenheit" if the current temperature is below the target. With X 
being the number of degrees in Fahrenheit to heat the room to reach the target, rounded to 
1 decimal place.
Return "Cool: X degrees Fahrenheit" if the current temperature is above the target. With X 
being the number of degrees in Fahrenheit to cool the room to reach the target, rounded to 
1 decimal place.
Return "Hold" if the current temperature is equal to the target.
To convert Celsius to Fahrenheit, multiply the Celsius temperature by 1.8 and add 32 to the 
result (F = (C * 1.8) + 32).
*/

/*
1. adjustThermostat(32, 0) should return "Hold".
2. adjustThermostat(70, 25) should return "Heat: 7.0 degrees Fahrenheit".
3. adjustThermostat(72, 18) should return "Cool: 7.6 degrees Fahrenheit".
4. adjustThermostat(212, 100) should return "Hold".
5. adjustThermostat(59, 22) should return "Heat: 12.6 degrees Fahrenheit".
*/

function adjustThermostat(currentF, targetC) {
  // Turn targetC into targetF
  let targetF = targetC * 1.8 + 32;

  // Subtract targetF from currentF
  let adjustment = targetF - currentF;

  // Variable for checking decimal
  let decimalCheck = adjustment.toString().split('.');
  // If contains numbers after decimal AND there is more than one decimal place...
  if (decimalCheck[1] !== undefined && decimalCheck[1].length > 1) {
    // Round to one decimal place
    adjustment = adjustment.toFixed(1);
  }

  // If target is the same as current, return hold
  if (adjustment === 0) {
    return 'Hold';
    // If target is greater than current, return heat
  } else if (adjustment > 0) {
    // If doesnt contain number after decimal, make it 0
    if (decimalCheck[1] === undefined) {
      adjustment += '.0';
    }
    return 'Heat: ' + adjustment + ' degrees Fahrenheit';
    //If target is less than current, return cool
  } else if (adjustment < 0) {
    // If doesnt contain number after decimal, make it 0
    if (decimalCheck[1] === undefined) {
      adjustment += '.0';
    }
    return 'Cool: ' + adjustment * -1 + ' degrees Fahrenheit';
  }
}
