function solution(n) {
    var answer = [];
    for (let i=0 ; i<=n; i++){
        if (i%2 != 0){
            answer.push(i); 
        }
    }
    return answer;
}

//+2를 사용하기
function solution2(n) {
    var answer = [];

    for (let i = 1; i<=n; i+=2) answer.push(i)

    return answer;
}