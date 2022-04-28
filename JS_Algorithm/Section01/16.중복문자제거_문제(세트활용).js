function solution(s) {
  let answer = "";
  let n = new Set();
  for (let x of s) {
    n.add(x);
  }
  n.forEach((x) => (answer += x));
  return answer;
}
console.log(solution("ksekkset"));
