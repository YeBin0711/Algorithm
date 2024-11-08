function solution(x) {
    var answer = true;
    const num = x.toString().split('').map(v=> parseInt(v)).reduce((v,i)=> v+i);
    if( x%num === 0 ? answer : answer = false);
    return answer;
}