let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const paper = input.slice(1).map((v) => v.split(" ").map(Number));
const answer = [0, 0];
let total;

function recursion(n, x, y) {
  total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += paper[y + j][x + i];
    }
  }

  if (total === 0) answer[0]++;
  else if (total === n * n) answer[1]++;
  else {
    n /= 2;
    recursion(n, x, y);
    recursion(n, x + n, y);
    recursion(n, x, y + n);
    recursion(n, x + n, y + n);
  }
}

recursion(N, 0, 0);
console.log(answer.join("\n"));
