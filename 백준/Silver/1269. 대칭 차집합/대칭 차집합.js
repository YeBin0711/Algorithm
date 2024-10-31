const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const setA = new Set(input[1].split(' ').map(Number));
const setB = new Set(input[2].split(' ').map(Number));

let count = 0;

setA.forEach(value => {
    if (!setB.has(value)) count++;
});

setB.forEach(value => {
    if (!setA.has(value)) count++;
});

console.log(count);