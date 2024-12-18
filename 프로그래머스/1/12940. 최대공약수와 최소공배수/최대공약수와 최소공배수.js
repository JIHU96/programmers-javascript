function solution(n, m) {
    function getGCD(a, b) {
        return a % b === 0 ? b : getGCD(b, a % b);
    }
    
    const gcd = getGCD(n, m)
    const lcm = n * m / gcd
    
    return [gcd ,lcm];
}