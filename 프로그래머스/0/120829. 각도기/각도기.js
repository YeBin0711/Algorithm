function solution(angle) {
    var answer = 0;
    if(angle <90){
        answer = 1;
    }
    else if(angle === 90){ 
        answer = 2;
    }
    else if(90< angle && angle<180){ 
        answer = 3;
    }
    else if(angle === 180){ 
        answer = 4;
    }
    return answer;
}

//필터 사용
function solution2(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}