const isEven = (num) => num % 2 === 0;

function solution(arr, query) {
    let answer = arr;
    
    for (let i = 0; i <query.length; i++){
        const q = query[i];
        
        if(isEven(i)) {
            const temp = answer.slice(0, q + 1);
            answer = temp;
        } else {
            const temp = answer.slice(q);
            answer = temp;
        }
    }
    
    return answer;
}