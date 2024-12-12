// A의 작은수 * B의 큰수
function solution(A,B){
    // 정렬부터 돌리기
    const sortedA = A.sort((a,b) => a-b);
    const sortedB = B.sort((a,b) => a-b);
    const length = A.length;
    
    let answer = 0;
    
    for (let i = 0; i < length; i ++){
        answer += sortedA[i] * sortedB[length - 1 - i]
    }
    
    return answer;
}