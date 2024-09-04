function solution(n) {
    var answer = 0;
    for(let i = 0; i<=n; i+=2){
        var answer = answer+i;
    }
    return answer;
}

//수열 사용?
function solution2(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}