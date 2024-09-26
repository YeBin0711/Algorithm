function solution(k, score) {
    var arr = [];
    var answer = [];
    for(let i = 0; i < score.length; i++){
        if( i < k){
            arr.push(score[i]);
            arr.sort((a, b) => a - b);
            answer.push(arr[0]);
        }
        else {
            if(arr[0] <= score[i] ){
                arr.push(score[i]);
                arr.sort((a, b) => a - b);
                arr.shift();
                answer.push(arr[0]);
            }
            else{
                answer.push(arr[0]);
            }
        }
    }
    return answer;
}