function solution(priorities, location) {
    let standBYQueue = priorities.map((pri, i) => ({ id: i, pri }));       
    let executeQueue = []
    
    while(true){
        if (standBYQueue.length === 0) break;
        
        const first = standBYQueue.shift();
        const canExecute = !standBYQueue.some(v => v.pri > first.pri)
        
        if(canExecute) executeQueue.push(first)
        else standBYQueue.push(first)   
    }
    
    const result = executeQueue.findIndex(e => e.id === location) + 1
    
    return result;
}

