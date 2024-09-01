function solution(n) {
    var answer = n%7===0 ? n/7 :Math.floor(n/7)+1;
    return answer;
}

//반올림 함수 
function solution2(n) {
    return Math.ceil(n / 7)
}