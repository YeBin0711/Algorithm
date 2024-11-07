function solution(num_str) {
    return num_str.split('').map(v=>parseInt(v)).reduce((i,k) =>i+k);
}