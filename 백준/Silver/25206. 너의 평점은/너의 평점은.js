const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.split(' '));
}).on('close', function(){
 
    let totalCredit = 0; //총 학점
    for(let i = 0; i<input.length; i++){
        if(input[i][2] !== 'P'){
           totalCredit += Number(input[i][1]);
        }
    }

    let totalScore = 0; //총 점수
    for(let i = 0; i<input.length;i++){
    switch(input[i][2]){
        case 'A+':
        totalScore+= 4.5*Number(input[i][1]);
            break;
        case 'A0':
        totalScore+= 4.0*Number(input[i][1]);
            break;
        case 'B+':
        totalScore+= 3.5*Number(input[i][1]);
            break;
        case 'B0':
        totalScore+= 3.0*Number(input[i][1]);
            break;
        case 'C+':
        totalScore+= 2.5*Number(input[i][1]);
            break;
        case 'C0':
        totalScore+= 2.0*Number(input[i][1]);
            break;
        case 'D+':
        totalScore+= 1.5*Number(input[i][1]);
            break;
        case 'D0':
        totalScore+= 1.0*Number(input[i][1]);
            break;
        case 'F':
        totalScore += 0.0*Number(input[i][1]);
            break;
        default:
            totalScore;
        }
    }
    let answer = Number(totalScore/totalCredit);
    console.log(answer);
    process.exit();
});