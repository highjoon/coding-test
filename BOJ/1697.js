let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [N, K] = input;
let ch = Array.from({ length: 100001 }, () => 0);
let distance = Array.from({ length: 100001 }, () => 0);
const queue = [];
queue.push(N);
ch[N] = 1;

let answer = 0;

function BFS() {
  while (queue.length) {
    let x = queue.shift();
    if (x === K) return distance[x];
    for (let nx of [x - 1, x + 1, x * 2]) {
      if (nx >= 0 && nx <= 100000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        distance[nx] = distance[x] + 1;
      }
    }
  }
}

answer = BFS();

console.log(answer);
