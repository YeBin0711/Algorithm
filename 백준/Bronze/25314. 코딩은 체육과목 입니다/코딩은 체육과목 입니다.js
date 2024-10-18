const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    let answer = '';
    for(let i = 1 ; i<=input[0]; i+=4){
        answer +='long ';
    }
    console.log(answer + 'int');
    process.exit();
});