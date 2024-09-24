function solution(t, p) {
    let arr = [];
    let answer = 0;
    for(let i = 0; i< t.length-p.length+1; i++){
        arr.push(parseInt(t.substring(i, i+p.length)));
    }
    for(let j = 0; j<arr.length; j++){
        arr[j] <= p ? answer+=1 : answer;
    }
    return answer;
}