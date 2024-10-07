const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    let answer = '';
    let i =  1;
    while(i<=n){
        answer+=str;
        i++
    }
    console.log(answer);
});