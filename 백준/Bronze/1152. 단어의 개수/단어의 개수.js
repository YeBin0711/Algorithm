const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.trim().split(/\s+/);
}).on('close', function(){
    console.log(input[0] === '' ? 0 : input.length);
    process.exit();
});
