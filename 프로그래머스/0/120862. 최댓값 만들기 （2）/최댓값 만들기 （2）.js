function solution(numbers) {
    let answer = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let k = numbers[i] * numbers[j];
            if (k > answer) {
                answer = k;
            }
        }
    }
    
    return answer;
}
