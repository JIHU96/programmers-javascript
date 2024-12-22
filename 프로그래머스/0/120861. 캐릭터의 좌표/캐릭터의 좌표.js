function solution(keyinput, board) {
    let answer = [0, 0];
    const xEnd = (board[0] - 1 ) / 2
    const yEnd = (board[1] - 1 ) / 2
    
    keyinput.forEach(key => {
        switch(key){
            case 'left':
                if(answer[0] !== -xEnd) answer[0] -= 1;
                break;
            case 'right':
                if(answer[0] !== xEnd) answer[0] += 1;
                break;
            case 'down':
                if(answer[1] !== -yEnd) answer[1] -= 1;
                break;
            case 'up':
                if(answer[1] !== yEnd) answer[1] += 1;
                break;
            default:
                break;
        }
    })
    
    return answer;
}