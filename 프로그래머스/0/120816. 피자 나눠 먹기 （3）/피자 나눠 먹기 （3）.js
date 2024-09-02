function solution(s, n) {
    let i = 1;
    while(s*i<n){
        i++;
    }
    return i;
}
//올림 사용
function solution2(slice, n) {
    return Math.ceil(n / slice)
}