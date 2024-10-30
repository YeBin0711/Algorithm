const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
let count = 0;

for (let i = 1; i <= n; i++) {
    const word = input[i];
    const indexMap = {};
    let isGroupWord = true;

    word.split('').forEach((char, idx) => {
        if (!indexMap[char]) {
            indexMap[char] = [];
        }
        indexMap[char].push(idx);
    });

    for (let key in indexMap) {
        const indices = indexMap[key];

        for (let j = 1; j < indices.length; j++) {
            if (indices[j] - indices[j - 1] > 1) {
                isGroupWord = false;
                break;
            }
        }

        if (!isGroupWord) break;
    }

    if (isGroupWord) {
        count++;
    }
}

console.log(count);