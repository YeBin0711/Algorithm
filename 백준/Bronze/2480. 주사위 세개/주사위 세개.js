const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){


    let total = 0;
    const count_arr = input.reduce((a, i) => {return a[i]=(a[i]||0)+1, a},{});

    if (Object.values(count_arr).includes(3)) {
        const key = Object.keys(count_arr).find(key => count_arr[key] === 3); // 3번 등장한 숫자 찾기
        total = 10000 + key * 1000;
    }

    else if (Object.values(count_arr).includes(2)) {
        const key = Object.keys(count_arr).find(key => count_arr[key] === 2); // 2번 등장한 숫자 찾기
        total = 1000 + key * 100;
    }

    else {
        const key = Math.max(...Object.keys(count_arr));
        total = key * 100;
    }
    console.log(total);
    process.exit();
});