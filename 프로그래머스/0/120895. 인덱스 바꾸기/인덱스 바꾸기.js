function solution(my_string, num1, num2) {
    var answer = my_string.split("");
    const v = answer[num2];
    answer[num2] = answer[num1];
    answer[num1] = v;
    return answer.join("");
}