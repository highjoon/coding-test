let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let [N, K] = input[0].split(" ").map(Number);
  let S = input[1].split(" ");
  let D = input[2].split(" ").map((v) => Number(v) - 1);
  let answer = Array(N).fill("");

  while (K--) {
    for (let i = 0; i < D.length; i++) {
      let idx = D[i];
      answer[idx] = S[i];
    }
    S = answer.slice();
  }

  return answer.join(" ");
}

console.log(solution(input));
