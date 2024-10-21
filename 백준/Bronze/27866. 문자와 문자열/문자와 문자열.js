const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
    const word = input[0];
    const index = parseInt(input[1]) - 1;
    console.log(word[index]);
    process.exit();
});