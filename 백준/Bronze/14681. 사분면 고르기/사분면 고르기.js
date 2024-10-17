const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(...line.split(' ').map(el => parseInt(el)));
}).on('close', function(){
    input[0] > 0 ? input[1] > 0 ? console.log(1) : console.log(4) :
    input[1] > 0 ? console.log(2) : console.log(3);
    process.exit();
});