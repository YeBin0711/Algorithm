const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split('');
}).on('close', function(){
    //객체 만들기
    const alphabet = {};
    for (let i = 97; i <= 122; i++) {  // 'a'는 97, 'z'는 122
        alphabet[String.fromCharCode(i)] = -1;
    }
    // 각 알파벳의 첫 등장 위치 기록
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        // 알파벳에 처음 등장한 경우에만 위치 저장
        if (alphabet[char] === -1) {
            alphabet[char] = i;
        }
    }

    // 결과 출력 (공백으로 구분)
    console.log(Object.values(alphabet).join(' '));

    process.exit();
});