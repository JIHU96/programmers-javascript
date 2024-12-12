function convert(x){
    const orginLength = x.length
    const convertedX = [...x].filter(v => v !== '0')
    const convertedXLength = convertedX.length
    
    return [orginLength-convertedXLength, convertedXLength.toString(2)]
} 

function solution(s) {
    let x = s;
    let times = 0;
    let zeroCount = 0
    
    
    
    while(x !== '1') {
        //console.log(i+1, ':', x, times, zeroCount)
        const [cZeroCount, cX] = convert(x)
        times += 1;
        zeroCount += cZeroCount;
        x = cX;
    }
    
    
    
    //while(x !== ''){
    //    x = convert(x)
    //}
    
    
    
    return [times, zeroCount];
}