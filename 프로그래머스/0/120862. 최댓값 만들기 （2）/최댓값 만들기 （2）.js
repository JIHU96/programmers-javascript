function solution(numbers) {
    const sortedNumbers = numbers.sort((a , b) => b - a)
    const max = sortedNumbers[0] * sortedNumbers[1]
    const min = sortedNumbers.at(-1) * sortedNumbers.at(-2)

    return Math.max(min, max);
}