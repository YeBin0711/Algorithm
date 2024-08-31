function solution(numbers){
    var total = 0;
    numbers.forEach((value) =>{
        total+=value
    })
    var answer =  total/numbers.length;
    return answer;
}