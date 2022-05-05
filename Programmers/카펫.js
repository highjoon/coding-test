function solution(brown, yellow) {
  let answer = [];

  function getFullDivisors(num) {
    const result = [];
    for (let i = 3; i < num; i++) {
      if (num % i === 0 && num / i > 2) {
        result.push([i, num / i]);
      }
    }
    return result;
  }

  let fullDivs = getFullDivisors(brown + yellow);
  let flag = true;

  for (let fullDiv of fullDivs) {
    let [fullX, fullY] = fullDiv;
    if ((fullX - 2) * (fullY - 2) === yellow && fullX >= fullY) {
      answer.push(fullX);
      answer.push(fullY);
      flag = false;
      break;
    }
    if (!flag) break;
  }

  return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
