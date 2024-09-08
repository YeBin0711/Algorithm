function solution(n, numlist) {
    var answer = numlist.filter((value) => value%n === 0);
    return answer;
}