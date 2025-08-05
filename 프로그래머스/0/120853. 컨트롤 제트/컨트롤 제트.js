function solution(s) {
  let arr = s.split(" ");

  let answer = arr.reduce((result, item, index, array) => {
    if (item === "Z") return result - array[index - 1];
    return result + Number(item);
  }, 0);

  return answer;
}