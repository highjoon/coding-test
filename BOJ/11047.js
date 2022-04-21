let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input.shift().split(" ").map(Number);
input = input.map(Number).sort((a, b) => b - a);

let answer = 0;

for (let coin of input) {
  if (K === 0) break;
  if (K - coin < 0) continue;
  answer += parseInt(K / coin);
  K %= coin;
}

console.log(answer);
