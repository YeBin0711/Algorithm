const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
readline.on('line', function(line) {
    input.push(line.split(""));
}).on('close', function(){
    let word = input[1];
    let total = 0;
    for(let v of word){
        v = parseInt(v);
        total += v;
    }
    console.log(total);
    process.exit();
});