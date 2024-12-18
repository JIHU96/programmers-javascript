// 1. 장르별로 묶은 객체 생성
// 2. 장르별 총 재생수를 정의
// 3. 총 재생수를 기준으로 정렬하여 새 배열
// 4. 3번의 배열을 순회하여 최상위 2개를 answer 배열에 추가
function solution(genres, plays) {
    const COUNT = 2;
    let answer = []
    let genreTotal = {}
    let genreHash = {}
    
    for(let i = 0; i < genres.length; i++){
        const genre = genres[i]
        const [id, play] = [i, plays[i]]
        genreTotal[genre] = (genreTotal[genre] || 0) + play;
        if(!genreHash[genre]) genreHash[genre] = []
        genreHash[genre].push({id, play})
    }
   
    const genresRank = Object.keys(genreTotal).sort((a, b) => genreTotal[b] - genreTotal[a])
    
    genresRank.forEach(genre => {
        const top2Songs = genreHash[genre]
            .sort((a, b) => b.play - a.play)
            .slice(0, COUNT)
        top2Songs.forEach(({id, play}) => answer.push(id))                                    
    })
    
    return answer;
}