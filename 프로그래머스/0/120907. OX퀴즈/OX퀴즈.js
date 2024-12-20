function solution(quiz) {
    let answer = [];
    
    quiz.forEach(q => {
        const split = q.split(' ')    
        const left = split[1] === '-' ? split[0] - +split[2] : +split[0] + +split[2]
        left === +split[4] ? answer.push("O") : answer.push("X")
    })
    
    return answer;
}