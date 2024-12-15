function solution(k, tangerine) {
    // 크기 별 수량 맵핑
    let sortedT = tangerine
    let map = new Map();
    for (t of sortedT) {
        map.set(t, (map.get(t) || 0) + 1) 
    }
    
    // 수량 값만 추출하여 내림차순 정렬
    let sortedMap = [...map.values()].sort((a,b) => b - a);
    let remainK = k;
    let answer = 0;
    
    // 최소 개수를 위해 가장 많은 수량 부터 k 개에서 차감
    for (let count of sortedMap){
        if(remainK >= count) {
            remainK -= count;
            answer += 1;
        } else if (remainK > 0) {
            answer += 1;
            break;
        } else {
            break;
        }
    }
    
    
    return answer;
}