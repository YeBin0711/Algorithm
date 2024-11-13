function solution(a, b) {
    const num = parseInt(a.toString()+b.toString());
    const mul = 2*a*b;
    if(num > mul){
        return num;
    }
    return mul;
}