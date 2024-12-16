// Set으로 중복 제거하고 for 문으로 push
function solution(arr, k) {
    let answer = [];
    
    let setArr = [...new Set(arr)]
    
    for (let i = 0; i < k; i++){
        if(setArr[i] === undefined) answer.push(-1)
        else answer.push(setArr[i])
    }
    
    return answer;
}