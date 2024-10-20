const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = input.concat(line.split(' ').map(el => parseInt(el)));
}).on('close', function(){
    const remainSet = new Set(input.map(v => v % 42));
    console.log(remainSet.size);
    process.exit();
});
