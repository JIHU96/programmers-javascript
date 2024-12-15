function solution(progresses, speeds) {
    let workDays = []
    for (let i = 0; i < speeds.length; i++) {
        workDays.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    
    let queue = [];
    let answer = []
    
    for (let workDay of workDays) {    
        if(queue.length === 0){
            queue.push(workDay)
            continue;
        } 
        
        if (workDay > queue[0]) {
            answer.push(queue.length)
            queue = [workDay]
        } else {
            queue.push(workDay)
        }
        
    }
    
    answer.push(queue.length)
    
    return answer;
}