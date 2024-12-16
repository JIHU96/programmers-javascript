function getGCD(a, b) {
    return a % b === 0 ? b : getGCD(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    // 분모
    let denominator = denom1 * denom2
    // 분자
    let numerator = (numer1 * denom2) + (numer2 * denom1)
    let gcd = getGCD(numerator, denominator)
    
    return [numerator / gcd, denominator / gcd];
}