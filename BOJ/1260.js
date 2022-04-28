let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = input.map((v) => v.split(" ").map(Number));
let [N, M, V] = input.shift();

let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
let chDFS = Array.from({ length: N + 1 }, () => 0);
let chBFS = Array.from({ length: N + 1 }, () => 0);
let routeDFS = [];
let routeBFS = [];
let answer = [];

for (let [a, b] of input) {
  graph[a][b] = 1;
  graph[b][a] = 1;
}

function DFS(v) {
  chDFS[v] = 1;
  routeDFS.push(v);
  for (let i = 1; i < graph.length; i++) {
    if (graph[v][i] === 1 && chDFS[i] === 0) {
      DFS(i);
    }
  }
}

function BFS(v) {
  const queue = [];
  queue.push(v);
  routeBFS.push(v);

  while (queue.length) {
    let nv = queue.shift();
    chBFS[nv] = 1;
    for (let i = 1; i < graph.length; i++) {
      if (graph[nv][i] === 1 && chBFS[i] === 0) {
        chBFS[i] = 1;
        queue.push(i);
        routeBFS.push(i);
      }
    }
  }
  return;
}

DFS(V);
BFS(V);

answer.push(routeDFS.join(" "));
answer.push(routeBFS.join(" "));
console.log(answer.join("\n"));
