function solution(num_list) {
    let total = 1;
    if(10 < num_list.length){
        total = num_list.reduce((v,i) => v+i);
    } else{
        total = num_list.reduce((v,i) => v*i)
    }
    return total;
}