function solution(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    });
    numbers.reverse();
    var answer = 0;
    answer = numbers[0] * numbers[1];
    return answer;
}