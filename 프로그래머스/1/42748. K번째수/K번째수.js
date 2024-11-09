function solution(array, commands) {
    let answer = [];
    for(let v = 0; v<commands.length; v++){
        const arr = [];
        arr.push(...commands[v]);
        const [i,j,k] = arr;
        const k_num = array.slice(i-1,j).sort((a,b)=> a-b);
        answer.push(k_num[k-1]);
    }
    return answer;
}