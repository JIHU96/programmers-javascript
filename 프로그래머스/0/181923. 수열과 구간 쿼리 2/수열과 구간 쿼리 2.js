function solution(arr, queries) {
    let answer = [];
    
    for (let query of queries){
        const [s, e, k] = query;
        const slice = arr.slice(s, e + 1)
        const filter = slice.filter((el) => el > k)
        if (filter.length === 0) answer.push(-1)
        else answer.push(Math.min(...filter))
    }
    
    return answer;
}