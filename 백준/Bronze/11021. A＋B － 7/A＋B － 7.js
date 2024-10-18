const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function(){
    for(let i = 1; i < input.length; i++){
        console.log(`Case #${i}: ${input[i][0]+input[i][1]}`);
    }
    process.exit();
});