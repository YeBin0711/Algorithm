function solution(my_string) {
    const words = my_string.split("");
    var answer = '';
    for(let i = 0 ; i < my_string.length ; i++){
        if(words[i] === words[i].toUpperCase()){
            var wore = words[i].toLowerCase();
            answer += wore;
        }
        else {
            var word = words[i].toUpperCase();
            answer += word;
        }
    }
    return answer;
}