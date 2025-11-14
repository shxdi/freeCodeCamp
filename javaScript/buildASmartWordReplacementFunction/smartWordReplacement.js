function myReplace(str, word, sub) {
  if (word[0].toUpperCase() === word[0]) {
    sub = sub[0].toUpperCase() + sub.slice(1);
    console.log(sub);
  } else {
    sub = sub[0].toLowerCase() + sub.slice(1);
    console.log(sub);
  }
  return str.replace(word, sub);
}
