const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function() {
    const num = input[0][0];
    const grid = Array.from({ length: 101 }, () => Array(101).fill(0));

    for (let i = 1; i <= num; i++) {
        const [x, y] = input[i];
        for (let row = x; row < x + 10; row++) {
            for (let col = y; col < y + 10; col++) {
                grid[row][col] = 1;
            }
        }
    }

    let answer = 0;
    for (let row = 0; row < 101; row++) {
        for (let col = 0; col < 101; col++) {
            if (grid[row][col] === 1) answer++;
        }
    }

    console.log(answer);
    process.exit();
});


