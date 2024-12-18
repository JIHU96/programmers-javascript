// 해시는 했는데 푸는 방법은 몰라서 참고함: https://school.programmers.co.kr/questions/33347
function solution(clothes) {
    let answer = 1;

    let hash = {}
    clothes.forEach(([item, category]) => hash[category] = (hash[category] || 0)+ 1)
    for (let category in hash) {
        answer = answer * (hash[category] + 1)
    }
    
    return answer - 1;
}