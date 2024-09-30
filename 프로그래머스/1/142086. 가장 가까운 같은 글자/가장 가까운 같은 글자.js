function solution(s) {
    var arr = s.split('');
    var answer = [-1];
    for(let i = 1; i<arr.length; i++){
        for(let j = i-1; 0 <= j ; j--){
            if(arr[i] === arr[j]){
                answer.push(i-j);
                break;
            }
            else{
                if(j === 0){
                  answer.push(-1);
                }
            }
        }
    }
    return answer;
}