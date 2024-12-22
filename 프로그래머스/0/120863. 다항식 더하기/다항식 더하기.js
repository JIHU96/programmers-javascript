function solution(polynomial) {
    if (polynomial === 0 || polynomial === ' ') return 0
    
    let hash = {'x' : 0, 'num': 0}
    const arr = polynomial.split(' ').filter(v => v !== '+')
    
    arr.forEach(v => {
        if (v.includes('x')) {
            if(v[0] === 'x') hash['x'] += 1
            else hash['x'] += Number(v.slice(0, v.length - 1))
        }
        else hash['num'] += Number(v)
    })
    
    const x = hash['x'] === 0 ? '' 
                : hash['x'] === 1 ? 'x' 
                : `${hash['x']}x`
    const num = hash['num'] === 0 ? '' : `${hash['num']}`
    
    if(hash['x'] === 0) return num
    else if(hash['num'] === 0) return x
    else return `${x} + ${num}`
}