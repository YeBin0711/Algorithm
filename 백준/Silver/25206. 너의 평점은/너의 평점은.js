const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

function getScore(grade) {
    switch(grade) {
        case 'A+': return 4.5;
        case 'A0': return 4.0;
        case 'B+': return 3.5;
        case 'B0': return 3.0;
        case 'C+': return 2.5;
        case 'C0': return 2.0;
        case 'D+': return 1.5;
        case 'D0': return 1.0;
        case 'F': return 0.0;
        default: return 0.0;
    }
}

readline.on('line', function(line) {
    input.push(line.split(' '));
}).on('close', function() {

    let totalCredit = 0;  // 총 학점
    let totalScore = 0;   // 총 점수

    input.forEach((subject) => {
        const [name, credit, grade] = subject;
        const creditValue = Number(credit);

        if (grade !== 'P') {
            totalCredit += creditValue;
            totalScore += getScore(grade) * creditValue;
        }
    });

    const answer = totalScore / totalCredit;
    console.log(answer.toFixed(6));
    process.exit();
});