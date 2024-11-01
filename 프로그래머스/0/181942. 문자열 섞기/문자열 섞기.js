function solution(str1, str2) {
    return Array.from(str1, (char, index) => char + str2[index]).join('');
}

console.log(solution("aaaaa", "bbbbb"));
