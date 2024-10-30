const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
let count = 0;

for (let i = 1; i <= n; i++) {
    const word = input[i];
    let isGroupWord = true;
    const seenChars = new Set();

    for (let j = 0; j < word.length; j++) {
        if (seenChars.has(word[j]) && word[j] !== word[j - 1]) {
            isGroupWord = false;
            break;
        }
        seenChars.add(word[j]);
    }

    if (isGroupWord) {
        count++;
    }
}

console.log(count);