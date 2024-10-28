const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.split(',').map(el => parseInt(el)));
}).on('close', function(){
    const n = input[0][0];
    const numbers = input.slice(1);
    for(let i = 0; i<n; i++){
        const answer = numbers[i][0]+numbers[i][1];
        console.log(answer);
    }
    process.exit();
});