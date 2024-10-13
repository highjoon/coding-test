function solution(a, b, c) {
  let answer = "NO";
  let max = Math.max(a, b, c);
  let sum = a + b + c;
  let tmp = sum - max;
  if (tmp > max) answer = "YES";
  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
