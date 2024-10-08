function solution(s, skip, index) {
    const alphabet = Array(26).fill().map((v, i) => String.fromCharCode(i + 97));
    const newAlphabet = alphabet.filter(c => !skip.includes(c));
    let answer = '';
    
    for(let c of s){
        let currentIndex = newAlphabet.indexOf(c);
        let newIndex = (currentIndex + index) % newAlphabet.length;
        answer += newAlphabet[newIndex];
    }
    
    return answer;
}