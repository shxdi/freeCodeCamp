function pairElement(string) {
  let dnaPairs = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'A') {
      dnaPairs.push(['A', 'T']);
    } else if (string[i] === 'T') {
      dnaPairs.push(['T', 'A']);
    } else if (string[i] === 'C') {
      dnaPairs.push(['C', 'G']);
    } else if (string[i] === 'G') {
      dnaPairs.push(['G', 'C']);
    }
  }

  return dnaPairs;
}
