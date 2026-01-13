/*
Given an amount of money you have, and an array of items you want to buy, determine how many of 
    them you can afford.

The given amount will be in the format ["Amount", "Currency Code"]. For example: 
    ["150.00", "USD"] or ["6000", "JPY"].
Each array item you want to purchase will be in the same format.
Use the following exchange rates to convert values:

Currency	1 Unit Equals
USD	        1.00 USD
EUR	        1.10 USD
GBP	        1.25 USD
JPY	        0.0070 USD
CAD	        0.75 USD

If you can afford all the items in the list, return "Buy them all!".
Otherwise, return "Buy the first X items.", where X is the number of items you can afford 
    when purchased in the order given.
*/

/*
1. buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]) should 
    return "Buy the first 2 items.".
2. buyItems(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]]) should 
    return "Buy them all!".
3. buyItems(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], 
    ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]]) should return "Buy the first 3 items.".
4. buyItems(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], 
    ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]]) should return "Buy them all!".
5. buyItems(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], 
    ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]]) should return "Buy the first 5 items.".
*/

function buyItems(funds, items) {
  const eurMultiplier = 1.1;
  const gbpMultiplier = 1.25;
  const jpyMultiplier = 0.007;
  const cadMultiplier = 0.75;
  let currentFunds;
  let purchasedItems = 0;

  if (funds[1] === 'USD') {
    currentFunds = funds[0];
  } else if (funds[1] === 'EUR') {
    currentFunds = funds[0] * eurMultiplier;
  } else if (funds[1] === 'GBP') {
    currentFunds = funds[0] * gbpMultiplier;
  } else if (funds[1] === 'JPY') {
    currentFunds = funds[0] * jpyMultiplier;
  } else if (funds[1] === 'CAD') {
    currentFunds = funds[0] * cadMultiplier;
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i][1] === 'USD') {
      currentFunds -= items[i][0];
    } else if (items[i][1] === 'EUR') {
      currentFunds -= items[i][0] * eurMultiplier;
    } else if (items[i][1] === 'GBP') {
      currentFunds -= items[i][0] * gbpMultiplier;
    } else if (items[i][1] === 'JPY') {
      currentFunds -= items[i][0] * jpyMultiplier;
    } else if (items[i][1] === 'CAD') {
      currentFunds -= items[i][0] * cadMultiplier;
    }

    if (currentFunds > 0) {
      purchasedItems++;
    } else {
      return `Buy the first ${purchasedItems} items.`;
    }
  }

  return 'Buy them all!';
}
