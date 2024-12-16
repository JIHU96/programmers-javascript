function solution(d, budget) {
    const sortedD = [...d].sort((a,b) => a - b);
    const length = d.length;
    
    let result = 0;
    let remainBudget = budget;
    
    for (let i = 0; i < length; i++){    
        if(remainBudget - sortedD[i] < 0) break;
        remainBudget -= sortedD[i]
        result++
    }
    
    return result;
}