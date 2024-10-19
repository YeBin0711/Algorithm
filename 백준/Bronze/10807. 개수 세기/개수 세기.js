const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function(){
    const N = input[0][0];
    const numbers = input[1]; 
    const v = input[2][0];
    
    const count = numbers.filter(num => num === v).length;
    console.log(count);
    process.exit();
});