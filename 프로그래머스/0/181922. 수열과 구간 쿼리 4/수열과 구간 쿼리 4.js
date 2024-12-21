function solution(arr, queries) {
    let answer = [...arr];
    
    queries.forEach((query) => {
        const [s, e, k] = query;
        const start = Math.ceil(s / k) * k
        for(let i = start; i < e + 1; i += k){
            answer[i] ++
        }
    })
    
    return answer;
}