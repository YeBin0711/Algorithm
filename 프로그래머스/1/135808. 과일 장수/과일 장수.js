function solution(k, m, score) {
    var answer = 0;
    var str = score.sort((a,b) => b-a);
    var box = [];
    for(let i = 0; i<str.length; i+=m){
        let sliceBox = [];
        sliceBox = str.slice(i, i+m);
        sliceBox.length < m ? 0 : box.push(sliceBox);
    }
    for(let i = 0; i<box.length; i++){
        box[i].sort((a,b) => a-b);
        answer += box[i][0] * m
    }
    return answer;
}