function solution(numbers) {
    // 모든 원소가 0인 경우의 예외처리
    if(numbers.every(v => v === 0)) return '0'
    
    const sorted = numbers.sort((a, b) => `${b}${a}` - `${a}${b}` )
    const stringifyNumbers = sorted.map(n => n + '')
    const result = stringifyNumbers.join('')
    
    return result;
}