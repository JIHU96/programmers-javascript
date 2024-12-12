function solution(n) {
    const divider = 1234567
    
    let fibo = [0, 1]
    
    if(n === 2) return 1
    
    for (let i = 2; i <= n; i ++){
        fibo[i] = (fibo[i - 1] % divider + fibo[i - 2] % divider) % divider
    }
    
    return fibo.at(-1);
}