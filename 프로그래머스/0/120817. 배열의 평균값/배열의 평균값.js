function solution(numbers){
    var total = 0;
    numbers.forEach((value) =>{
        total+=value
    })
    var answer =  total/numbers.length;
    return answer;
}

//reduce 사용
function solution2(numbers) {
    var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    return answer;
}