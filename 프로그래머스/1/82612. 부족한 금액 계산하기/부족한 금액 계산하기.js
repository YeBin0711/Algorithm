function solution(price, money, count) {
    const total = count*(price+price*count)/2
    if(total < money){
        return 0;
    } else{
        return total - money ;
    }
}