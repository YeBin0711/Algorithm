function solution(n) {
    var str = n.toString().split('');
    var num = str.map(x => parseInt(x));
    return num.reduce((p,n) => p+n,0);
}