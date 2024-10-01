function solution(numbers) {
    var answer = Number.MIN_SAFE_INTEGER;
    for(let i = 1; i <numbers.length; i++){
        for (let j = 0; j<i; j++){
            answer < numbers[i]*numbers[j] ? answer = numbers[i]*numbers[j] : answer;
        }
    }
    return answer;
}
