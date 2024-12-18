function solution(participant, completion) {
    let hash = {}
    
    for (let p of participant) {
        hash[p] = (hash[p] || 0) + 1
    }
    
    for (let c of completion) {
        hash[c] = hash[c] - 1
    }
    
    for (let key in hash) {
        if(hash[key] === 1) return key
    }
    
    return 0;
}