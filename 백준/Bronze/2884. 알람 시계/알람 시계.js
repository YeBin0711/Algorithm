const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    let H = input[0];
    let M = input[1];
    (M < 45) ? (H === 0) ? console.log(`23 ${60-(45-M)}`) : console.log(`${H-1} ${60-(45-M)}`) : console.log(`${H} ${M-45}`)
    process.exit();
});