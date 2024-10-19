const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function(){
    const numbers = input[1];
    console.log( Math.min(...numbers), Math.max(...numbers));
    process.exit();
});