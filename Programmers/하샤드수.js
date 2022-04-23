function solution(x) {
  let answer;
  let sum = x
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
  answer = x % sum === 0 ? true : false;
  return answer;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
