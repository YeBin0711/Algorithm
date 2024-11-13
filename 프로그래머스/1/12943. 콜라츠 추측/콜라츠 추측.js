function solution(num) {
    var answer = 0;
    while(answer < 500){
        if(num === 1){
            break;
        } else if(num%2 === 0){   
            num = num/2;
        }else{
            num = (3*num)+1;
        }
        answer += 1;
    }
    
    if(answer === 500){
        answer = -1;
    }
    
    return answer;
}