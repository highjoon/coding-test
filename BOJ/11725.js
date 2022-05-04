let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
input = input.slice(1).map((v) => v.split(" ").map(Number));

let graph = Array.from({ length: N + 1 }, () => Array());
let ch = Array.from({ length: N + 1 }, () => 0);

for (let [a, b] of input) {
  graph[a].push(b);
  graph[b].push(a);
}

const parent = [];
const answer = [];
const queue = [1];
ch[1] = 1;

let idx = 0;
while (idx !== queue.length) {
  let current = queue[idx];

  for (let i = 0; i < graph[current].length; i++) {
    let next = graph[current][i];

    if (ch[next] === 0) {
      ch[next] = 1;
      parent[next] = current;
      queue.push(next);
    }
  }
  idx++;
}

for (let x of parent) {
  if (x) answer.push(x);
}

console.log(answer.join("\n"));
