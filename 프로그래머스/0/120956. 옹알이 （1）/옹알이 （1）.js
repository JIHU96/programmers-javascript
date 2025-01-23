function solution(babbling) {
  const reg = /^(aya|ye|woo|ma)+$/;

  const res = babbling.reduce((count, babu) => (reg.test(babu) ? count + 1 : count), 0);
  
  const possible = ["aya", "ye", "woo", "ma" ]
  
  let arr = []
  
   for(let b of babbling) {
        for(const p of possible) {
             b = b.replace(p, "_")
   
        }
    arr.push(b)
   }
    
    const test = arr.map(str => str.split('').every(char => char === '_'))
    const count = test.filter(v => v).length
    console.log(count)
    
  return count;
}