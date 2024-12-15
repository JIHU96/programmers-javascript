function solution(n, words) {
    const people = n;
    const wordsLegnth = words.length;
    
    let lastWord = words[0].at(0);
    let wordsSet = new Set([]);
    
    for(let i = 0; i < wordsLegnth; i++){
        const currentWord = words[i]
        
        if (lastWord !== currentWord.at(0) || wordsSet.has(currentWord)) {
            let number = i % n + 1
            let cycle = Math.trunc(i / n) + 1
            
            return [number, cycle];
        }
        
        wordsSet.add(currentWord)
        lastWord = currentWord.at(-1)
        
    }

    return [0, 0];
}