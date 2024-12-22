function solution(my_string, queries) {
    let string = my_string;
    let answer = '';
    
    queries.forEach(([s, e]) => {
        answer = string.substring(0, s);

        let tmp = string.substring(s, e + 1);
        
        for(let i = tmp.length - 1; i >= 0; i--) {
            answer += tmp[i];    
        }
        
        answer += string.substring(e + 1);
        string = answer; 
    })
    
    return answer;
}