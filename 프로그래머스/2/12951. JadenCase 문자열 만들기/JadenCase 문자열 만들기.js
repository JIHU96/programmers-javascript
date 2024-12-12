// 공백으로 나누어서 단어별로 수행할까 했는데 연속 공백도 가능한 상태라 전체 순회
// 첫글자 숫자 -> 패스, 첫글자 알파벳 -> 대문자
// 공백 만날때까지 반복

function solution(s) {    
    function returnJadenCase(str) {
        let result = ''
        const first = str[0]
        
        
        if(+first) result += first
        else result += first.toUpperCase();
        
        for (let i = 1; i<str.length; i++){
            result += str[i].toLowerCase()
        }
        
        return result;
    }
    
    const split = s.split(' ')
    const convert = split.map(v => v === '' ? v : returnJadenCase(v))
    
    return convert.join(' ')
}