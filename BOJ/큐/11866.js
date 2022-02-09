const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = Number(input.shift());
const K = Number(input.shift());

const queue = Array.from({ length: N }, (v, i) => i + 1);
let cnt = 0;
let answer = "<";

while (queue.length) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift());
  }

  if (queue.length === 1) {
    answer += `${queue.shift()}>`;
  } else {
    answer += `${queue.shift()}, `;
  }
}

console.log(answer);
