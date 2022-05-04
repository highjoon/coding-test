let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const V = Number(input[0]);
input = input.slice(1).map((x) => x.split(" ").map(Number));

let answer = 0;
let graph = Array.from({ length: V + 1 }, () => Array());
let ch = Array.from({ length: V + 1 }, () => 0);

for (let x of input) {
  x.pop();
  for (let i = 1; i < x.length; i += 2) {
    graph[x[0]].push([x[i], x[i + 1]]);
  }
}

let max = { node: null, dist: Number.MIN_SAFE_INTEGER };

function DFS(node, dist) {
  if (dist > max.dist) {
    max.node = node;
    max.dist = dist;
  }
  for (let i = 0; i < graph[node].length; i++) {
    const [nextNode, nextDist] = graph[node][i];
    if (ch[nextNode] === 0) {
      ch[nextNode] = 1;
      DFS(nextNode, dist + nextDist);
    }
  }
}

ch[1] = 1;
DFS(1, 0);

max.dist = Number.MIN_SAFE_INTEGER;
ch = Array.from({ length: V + 1 }, () => 0);

ch[max.node] = 1;
DFS(max.node, 0);

answer = max.dist;
console.log(answer);
