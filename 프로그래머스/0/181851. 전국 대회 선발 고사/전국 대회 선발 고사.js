const getAnswer = ([a,b,c]) => 10000 * a + 100 * b + c;

function solution(rank, attendance) {
    // 1등부터 해서 3개 나올때까지 반복하기
    let count = 0
    let index = []
    let rankNum = 1
    
    while(true){
        if(count === 3) break;
        const rankIndex = rank.findIndex(v => v === rankNum);
        if(attendance[rankIndex]) {
            index.push(rankIndex)
            count++;
        }
        rankNum++;
    }
    
    return getAnswer(index);
}