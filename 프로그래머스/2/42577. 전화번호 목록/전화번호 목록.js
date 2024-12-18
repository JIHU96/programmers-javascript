function solution(phone_book) {
    // 문자열 정렬을 위해 compareFunction 제공 X
    const sortedBook = phone_book.sort()
    // some 메서드로 하나라도 접두어가 있는지 검사
    const answer = sortedBook.some((value, index, self) => self[index+1]?.indexOf(value) === 0)
    
    return !answer;
}