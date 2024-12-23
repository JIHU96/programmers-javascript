function solution(my_string) {
    let answer = Array.from({length: 52}, () => 0);
    
    for (const c of my_string){
        if (c.charCodeAt() <= 90) {
            answer[c.charCodeAt() - 65] += 1    
        } else {
            answer[c.charCodeAt() - 65 - 6] += 1
        }
    }
    
    return answer;
}