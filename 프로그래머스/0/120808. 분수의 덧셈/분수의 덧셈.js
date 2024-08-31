function cal_gcd(a, b) {
    return a % b === 0 ? b : cal_gcd(b, a % b)
}

function solution(denum1, numer1, denum2, numer2) {
    let denum = denum1 * numer2 + denum2 * numer1;
    let numer = numer1 * numer2;
    let gcd = cal_gcd(denum, numer);
    
    return [denum / gcd, numer / gcd];
}