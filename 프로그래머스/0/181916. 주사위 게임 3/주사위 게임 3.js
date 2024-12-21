function solution(a, b, c, d) {
    let set = new Set([a, b, c, d])
    let hash = [a, b, c, d].reduce((acc, dice) => {
        acc[dice] = (acc[dice] || 0) + 1
        return acc
    }, {})
    
    const size = set.size
    
    if (size === 1) return 1111 * a;
    else if (size === 3) {
        const tempArr = Object.entries(hash).filter(([key, value]) => value === 1)
        return Number(tempArr[0][0]) * Number(tempArr[1][0])
    }
    else if (size === 4) return Math.min(a, b, c, d)
    else {
        const isThreeSame = Object.entries(hash).some(([key, value]) => value === 3)
        
        if (isThreeSame) {
            let [p, q] = [0, 0];
            for (let h in hash){
                hash[h] === 3 ? p = +h : q = +h;
            }
            return (10 * p + q) ** 2
        } 
        else {
            const [p, q] = Object.keys(hash).map(v => +v)
            return (p + q) * (Math.abs(p - q));
        }
        
        
    }
    
    return 0;
}
