function solution(num_list) {
    return  num_list.reduce((p,n) => p*n, 1) < num_list.reduce((p,n) => p+n, 0)**2 ? 1 : 0;
}