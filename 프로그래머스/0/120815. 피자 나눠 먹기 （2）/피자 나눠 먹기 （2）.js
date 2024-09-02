function solution(n) {
    var answer = 0;
    if(n%6 === 0){
        answer = n/6;
    }
    else {
        for(let i = 1; i<100;i++){
            if((6*i) % n === 0){
                answer = i;
                break;
            }
        }
    }
    return answer;
}

//다른 코드
const solution2 = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}