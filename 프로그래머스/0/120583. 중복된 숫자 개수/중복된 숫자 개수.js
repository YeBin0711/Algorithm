function solution(array, n) {
    var answer = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i] === n){
            answer += 1;
        }
    }
    return answer;
}

//filter 사용
function solution2(array, n) {
    return array.filter(v=>v===n).length;
}