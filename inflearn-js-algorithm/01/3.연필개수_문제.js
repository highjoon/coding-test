function solution(n) {
  let answer;
  let num = parseInt(n / 12);
  if (n % 12 > 0) answer = num + 1;
  else answer = num;
  return answer;
}

console.log(solution(25));
console.log(solution(178));
