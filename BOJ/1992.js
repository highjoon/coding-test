let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const nums = input.slice(1).map((v) => v.split("").map(Number));

const quadTree = [];

function recursion(n, x, y) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += nums[y + j][x + i];
    }
  }

  if (total === 0) quadTree.push(0);
  else if (total === n * n) quadTree.push(1);
  else {
    n /= 2;
    quadTree.push("(");
    recursion(n, x, y);
    recursion(n, x + n, y);
    recursion(n, x, y + n);
    recursion(n, x + n, y + n);
    quadTree.push(")");
  }
}

recursion(N, 0, 0);
console.log(quadTree.join(""));
