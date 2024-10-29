const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const n = parseInt(input);

for (let i = 1; i <= n; i++) {
    let answer = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
    console.log(answer);
}

for (let i = n - 1; i >= 1; i--) {
    let answer = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
    console.log(answer);
}
