const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
    for (let i = 1; i < input.length; i++) {
        const word1 = input[i].substr(0, 1);
        const word2 = input[i].substr(-1);
        console.log(word1 + word2);
    }
    process.exit();
});