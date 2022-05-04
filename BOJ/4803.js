let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = input.map((v) => v.split(" ").map(Number));
input.pop();
input = input.reverse();

const answer = [];
let caseCnt = 0;

while (input.length) {
  caseCnt++;
  let [n, m] = input.pop();
  let graph = Array.from({ length: n + 1 }, () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  let total = 0;
  let cnt = m;
  while (cnt > 0) {
    let [a, b] = input.pop();
    graph[a].push(b);
    graph[b].push(a);
    cnt--;
  }

  let vertextCnt = 0;
  let edgeCnt = 0;

  function DFS(start) {
    vertextCnt++;
    edgeCnt += graph[start].length;
    ch[start] = 1;
    for (let i = 0; i < graph[start].length; i++) {
      const nextNode = graph[start][i];
      if (ch[nextNode] === 0) {
        DFS(nextNode);
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    if (ch[i] === 0) {
      vertextCnt = 0;
      edgeCnt = 0;
      DFS(i);
      if (edgeCnt === (vertextCnt - 1) * 2) {
        total++;
      }
    }
  }

  if (total === 0) answer.push(`Case ${caseCnt}: No trees.`);
  else if (total === 1) answer.push(`Case ${caseCnt}: There is one tree.`);
  else answer.push(`Case ${caseCnt}: A forest of ${total} trees.`);
}

console.log(answer.join("\n"));
