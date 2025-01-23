function solution(babbling) {
    const reg = /^(aya|ye|woo|ma)+$/;

  const res = babbling.reduce((count, babu) => (reg.test(babu) ? count + 1 : count), 0);

  return res;
}