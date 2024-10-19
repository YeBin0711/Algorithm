const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = input.concat(line.split(' ').map(el => parseInt(el)));
}).on('close', function(){
    const num = Math.max(...input);
    const indexNum = input.indexOf(num);
    console.log(num);
    console.log(indexNum+1);
    process.exit();
});