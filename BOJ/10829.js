let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);
let answer = "";

function dfs(n) {
  if (n === 0) return;
  else {
    dfs(parseInt(n / 2));
    answer += String(n % 2);
  }
}

dfs(N);
console.log(answer);
