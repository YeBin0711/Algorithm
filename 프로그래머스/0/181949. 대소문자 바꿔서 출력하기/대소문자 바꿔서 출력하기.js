const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let arr  = str.split('');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] === arr[i].toUpperCase() ? arr[i].toLowerCase() : arr[i].toUpperCase();
    }
    console.log(arr.join(''));
});