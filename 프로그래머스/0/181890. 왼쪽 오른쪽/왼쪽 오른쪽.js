function solution(str_list) {
    const checkLR = (array) => array.includes("l") || array.includes("r");
    
    if (!checkLR(str_list)) return [];
    
    let answer = [];
    
    const indexL = str_list.indexOf("l") !== -1 ? str_list.indexOf("l") : Infinity
    const indexR = str_list.indexOf("r") !== -1 ? str_list.indexOf("r") : Infinity
    
    if (indexL < indexR) answer = str_list.slice(0, indexL)
    else answer = str_list.slice(indexR + 1)
    
    return answer;
}