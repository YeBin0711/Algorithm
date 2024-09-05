function solution(hp) {
    var x = Math.floor(hp/5);
    var x1 = hp%5;
    var y = Math.floor(x1/3);
    var y1 = x1%3;
    if(x*5+y*3===hp){
        var z = 0;
    }
    else{
        var z = y1/1;
    }
    return x+y+z;
}

//변수로 두지 않고 그대로 식 안에 넣어서 작성하기
function solution2(hp) {
    return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
}