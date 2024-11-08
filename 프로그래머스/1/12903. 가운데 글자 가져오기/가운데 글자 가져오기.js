function solution(s) {
    var aa = ''
    const count = Math.floor(s.length/2);
    if(s.length%2 === 0){
        aa = s[count-1]+s[count];
    } else{
        aa = s[count];
    }
    return aa;
}