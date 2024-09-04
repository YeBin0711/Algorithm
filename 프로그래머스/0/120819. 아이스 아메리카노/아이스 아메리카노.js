function solution(money) {
    var answer = [];
    var i = Math.floor(money/5500);
    var k = money - 5500*i;
    answer.push(i);
    answer.push(k);
    return answer;
}

//간단하게 작성
function solution2(money) {
    return [Math.floor(money / 5500), money % 5500];
}