const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.split(' '));
}).on('close', function(){
    for(let i = 1; i< input.length; i++){
        const num = parseInt(input[i][0]);
        const word = input[i][1].split('');
        let words ='';
        for(let j = 0; j<word.length; j++){
            words += word[j].repeat(num);
        }
        console.log(words);
            }
    process.exit();
});