function solution(n) {
  let answer;
  function factorial(num) {
    if (num === 1) return 1;
    else return num * factorial(num - 1);
  }
  answer = factorial(n);
  return answer;
}

console.log(solution(5));
