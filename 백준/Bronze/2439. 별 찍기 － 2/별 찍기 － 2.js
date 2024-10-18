const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    const N = input[0];
    for (let i = 1; i <= N; i++) {
        console.log(' '.repeat(N - i) + '*'.repeat(i));
      }
    process.exit();
});