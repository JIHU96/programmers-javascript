function solution(n) {
    const divider = 1234567
    
    let fibo = [0, 1]
    
    if(n === 2) return 1
    
    for (let i = 2; i <= n; i ++){
        // 숫자가 엄청나게 커진 경우 생기는 오버플로우 방지
        fibo[i] = (fibo[i - 1] % divider + fibo[i - 2] % divider) % divider
    }
    
    return fibo.at(-1);
}
