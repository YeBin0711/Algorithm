const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function(){
    for(let i = 0; i< input.length; i++){
        console.log(input[i][0] + input[i][1]) ;
    }

});