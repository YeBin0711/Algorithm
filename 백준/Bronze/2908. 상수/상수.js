const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ');
}).on('close', function(){
    const num1 = parseInt(input[0].split("").reverse().join(""));
    const num2 = parseInt(input[1].split("").reverse().join(""));
    num1 > num2 ? console.log(num1) : console.log(num2);
    process.exit();
});