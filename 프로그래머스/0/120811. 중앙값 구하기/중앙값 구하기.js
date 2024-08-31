function solution(array) {
    array.sort(function(a,b){
        return a - b;
    });
    
    var half = Math.floor(array.length / 2);
    return array[half];
}