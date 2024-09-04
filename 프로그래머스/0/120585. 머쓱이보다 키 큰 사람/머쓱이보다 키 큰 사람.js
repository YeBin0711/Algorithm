function solution(array, height) {
    var answer = 0;
    for(let i = 0 ; i<array.length; i++){
        if(height < array[i]) {
            answer +=1;
        }                                            
    }
    return answer;
}

//filter 사용
function solution2(array, height) {
    var answer = array.filter(item => item > height);
    return answer.length;
}