const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    const score = input[0];
    return 90 <= score && score<=100
        ? console.log('A') : 80 <= score && score<=89
        ? console.log('B') : 70 <= score && score<=79
        ? console.log('C') : 60 <= score && score<=69
        ? console.log('D') : console.log('F');   
    process.exit();
});