// 문제 정의
// 1 step: +K or +(total * 2) 
// +K: battery += K (커질수록 사용함)
// +(total * 2): battery += 0
// 딱 n에 도착해야하며 넘으면 안됨
function solution(n){
    let battery = 0;
    let remainN = n;
    
    while(remainN !== 0){
        if(remainN === 0) break
        
        if(remainN % 2 === 0) {
            remainN /= 2;
        } else {
            remainN --;
            battery ++;
        }
    }
    
    return battery;
}