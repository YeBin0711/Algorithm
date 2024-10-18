const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function(){
    let buy = 0;
    for(let i = 2 ; i< input.length; i++){
        buy += input[i][0] * input[i][1];
    }
    buy === input[0][0] ? console.log('Yes') : console.log('No');
    process.exit();
});