function solution(s, t) {
  let answer = s.split(t);
  return answer.length - 1;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
