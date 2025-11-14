function translatePigLatin(str) {
  let startsWithVowel = /^[aeiou]/.test(str);
  let hasVowel = /[aeiou]/g.test(str);

  if (startsWithVowel) {
    return str + 'way';
  }

  if (!hasVowel) {
    return str + 'ay';
  }

  return str.replace(/([^aeiou]+)(\w+)/, '$2$1ay');
}
