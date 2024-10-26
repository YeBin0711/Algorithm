const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(...line.split(' ').map(Number));
}).on('close', function() {
    const n = input[0];
    const numbers = input.slice(1);

    const sortedNumbers = numbers.sort((a, b) => a - b);

    sortedNumbers.forEach(num => console.log(num));

    process.exit();
});