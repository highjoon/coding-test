let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

let cnt = 1;
let sum = 1;

while (sum < N) {
  sum += 6 * cnt;
  cnt++;
}

console.log(cnt);
