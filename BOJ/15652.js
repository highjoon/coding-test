let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = Number(input[0]);
const M = Number(input[1]);

const result = [];
let answer = "";

function DFS(idx, L) {
  if (L === M) {
    answer += `${result.join(" ")}\n`;
    return;
  } else {
    for (let i = idx; i < N; i++) {
      result.push(i + 1);
      DFS(i, L + 1);
      result.pop();
    }
  }
}

DFS(0, 0);
console.log(answer);
