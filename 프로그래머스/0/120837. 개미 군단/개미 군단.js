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