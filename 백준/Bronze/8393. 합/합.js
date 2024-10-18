const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    let answer = 0;
    for(let i = 0; i<=input[0]; i++){
        answer +=i;
    }
    console.log(answer);
    process.exit();
});