function truncateString(str, num) {
  if (typeof str !== 'string') {
    return 'Error: Please enter a valid string';
  } else if (typeof num !== 'number') {
    return 'Error: Please enter a valid number';
  }

  if (str.length > num) {
    str = str.slice(0, num) + '...';
    console.log(str);
  }

  return str;
}
