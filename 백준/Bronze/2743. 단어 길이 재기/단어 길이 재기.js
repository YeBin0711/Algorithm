const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split('');
}).on('close', function(){
    console.log(input.length);
    process.exit();
});