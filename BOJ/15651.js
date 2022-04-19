let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = Number(input[0]);
const M = Number(input[1]);

let answer = [];
let temp = Array.from({ length: M }, () => 0);

function DFS(L) {
  if (L === M) {
    answer.push(temp.slice().join(" "));
  } else {
    for (let i = 1; i <= N; i++) {
      temp[L] = i;
      DFS(L + 1);
    }
  }
}

DFS(0);
answer = answer.join("\n");
console.log(answer);
