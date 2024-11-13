function solution(d, budget) {
    var answer = 0;
    const total = d.reduce((v, i) => v + i);

    if (total <= budget) {
        answer = d.length;
    } else {
        d.sort((a, b) => a - b);
        let sum = 0;
        
        for (let i = 0; i < d.length; i++) {
            sum += d[i];
            if (sum > budget) break;
            answer++;
        }
    }

    return answer;
}