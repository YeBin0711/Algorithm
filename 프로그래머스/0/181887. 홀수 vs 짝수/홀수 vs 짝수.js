function solution(num_list) {
    var answer1 = 0;
    var answer2 = 0;
    for(let i = 0; i <num_list.length ; i++){
        i % 2 === 0 ? answer2 += num_list[i] : answer1 += num_list[i]
    }
    if(answer1 < answer2){
        return answer2;
    }else{
        return answer1;
    }
}