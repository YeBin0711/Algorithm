function solution(numbers) {
    var answer = [];
    numbers.forEach((value) =>{
        answer.push(value*2);
    })
    return answer;
}

//reduce를 사용해서 작성
function solution1(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}

//map을 사용해서 작성
const solution2 = (numbers) => numbers.map((number) => number * 2)
