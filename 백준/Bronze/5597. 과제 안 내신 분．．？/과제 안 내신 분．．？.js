const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = input.concat(line.split(' ').map(el => parseInt(el)));
}).on('close', function(){
    for(let i = 1; i <= 30; i++){
        if(input.includes(i)){
            continue;
        }
        else{
            console.log(i);
        }
    }
    process.exit();
});