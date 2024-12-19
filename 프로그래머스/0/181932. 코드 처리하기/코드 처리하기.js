// mode는 0 또는 1
// 0: 

function solution(code) {
    let ret = '';
    // 편한 변환을 위해 0을 false, 1을 true 치환
    let mode = false;
    
    for(let i = 0; i < code.length; i++){
        const current = code[i];
        
        if(current === '1') {
            mode = !mode;
            continue;
        }
        
        const isIdxEven = i % 2 === 0;
        
        if(+mode === 0 && isIdxEven) {
            ret += current;
            continue;
        }
        if(+mode === 1 && !isIdxEven) {
            ret += current;
            continue;
        }
    }
    
    return ret === '' ? "EMPTY" : ret;
}