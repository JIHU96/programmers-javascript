function solution(array, commands) {
    let answer = [];
    
    for (let command of commands){
        const [start, end, index] = command
        const slicedArray = array.slice(start - 1, end)
        const sortedArray = slicedArray.sort((a, b) => a - b)
        answer.push(sortedArray[index - 1])
    }
    
    return answer;
}