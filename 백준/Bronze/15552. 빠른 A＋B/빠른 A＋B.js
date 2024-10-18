const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function() {
    const T = input[0][0];
    let result = '';

    for (let i = 1; i <= T; i++) {
        const [A, B] = input[i]; 
        result += (A + B) + '\n';
    }

    console.log(result);
});
