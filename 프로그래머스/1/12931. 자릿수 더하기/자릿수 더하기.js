function solution(n)
{
    return n.toString().split('').map((v) => parseInt(v)).reduce((i, j) => i+j);
}