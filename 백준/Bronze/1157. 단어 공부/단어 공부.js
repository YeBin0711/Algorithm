const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

function mostFrequentChar(word) {
  const charCount = {};

  for (const char of word) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let maxCount = 0;
  let result = '';
  let isTie = false;

  for (const char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      result = char;
      isTie = false;
    } else if (charCount[char] === maxCount) {
      isTie = true;
    }
  }

  return isTie ? '?' : result;
}

console.log(mostFrequentChar(input));
