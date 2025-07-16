const checkCond1 = (n) => (n >= 50) && (n % 2 === 0);
const checkCond2 = (n) => (n < 50) && (n % 2 !== 0);

const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]); 

function solution(arr) {
    let minTrial  = 0;
    let length = arr.length;
    let prevArr = [...arr];
    let nextArr = Array.from({length});
    
    while(true) {
        console.log(minTrial)
        console.log(prevArr)
        console.log(nextArr)
        
        for(let i=0; i < arr.length; i++ ) {
            if(checkCond1(prevArr[i])) nextArr[i] = prevArr[i] / 2;
            else if(checkCond2(prevArr[i])) nextArr[i] = prevArr[i] * 2 + 1;
            else nextArr[i] = prevArr[i];
        }
        
        if(equals(prevArr, nextArr)) break;
        
        prevArr = [...nextArr];
        minTrial++;
    }
        
    return minTrial;
}