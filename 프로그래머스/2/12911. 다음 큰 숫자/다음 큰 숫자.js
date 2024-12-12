function countOfOnes(string) {
  return (string.match(/1/g) || []).length;  
} 

function solution(n) {
    let answer = n + 1;
    const nOnes = countOfOnes(n.toString(2))
    
    while(n < answer){
        const newString = answer.toString(2)
        if(nOnes === countOfOnes(newString)) break;
        
        answer ++
    }
    
    
    
    return answer;
}