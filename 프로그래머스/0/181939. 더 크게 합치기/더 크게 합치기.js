function solution(a, b) {
    var result = 0;
    var answer1 = parseInt(a.toString()+b.toString());
    var answer2 = parseInt(b.toString()+a.toString());
    answer1 > answer2 ? result = answer1 : answer1 === answer2 ? result = answer1 : result = answer2;
    return result;
}