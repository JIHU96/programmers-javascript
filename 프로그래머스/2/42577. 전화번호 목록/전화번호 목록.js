function solution(phone_book) {
    const sortedBook = phone_book.sort()
    
    const answer = sortedBook.some((value, index, self) => self[index+1]?.indexOf(value) === 0)

    return !answer;
}