function solution(s) {
  let answer = new Set();
  for (let x of s) {
    answer.add(x);
  }
  return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
