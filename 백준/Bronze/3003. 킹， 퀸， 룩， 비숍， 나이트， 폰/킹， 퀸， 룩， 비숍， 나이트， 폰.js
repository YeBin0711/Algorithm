const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => parseInt(v));
let answer = [];
for(let i = 0 ; i <input.length; i++){
    let num = 0;
    if(i === 0 || i === 1){
        num = 1 - input[i];
        answer.push(num);
    }
    else if(i === 2 || i === 3 || i === 4){
        num = 2 - input[i];
        answer.push(num);
    }
    else{
        num = 8 - input[i];
        answer.push(num);
    }
}
console.log(answer.join(' '));