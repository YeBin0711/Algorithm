function solution(numbers, num1, num2) {
    var answer = [];
    for(let i = num1; i<=num2; i++){
        answer.push(numbers[i]);
    }
    return answer;
}

//slice 사용하기
function solution2(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}
//splice 사용하기
function solution3(numbers, num1, num2) {
    return numbers.splice(num1, num2-num1+1);
}