function solution(money) {
    var answer = [];
    var i = Math.floor(money/5500);
    var k = money - 5500*i;
    answer.push(i);
    answer.push(k);
    return answer;
}