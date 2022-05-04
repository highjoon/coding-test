// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = [
//   "6 3",
//   "1 2",
//   "2 3",
//   "3 4",
//   "6 5",
//   "1 2",
//   "2 3",
//   "3 4",
//   "4 5",
//   "5 6",
//   "6 6",
//   "1 2",
//   "2 3",
//   "1 3",
//   "4 5",
//   "5 6",
//   "6 4",
//   "0 0",
// ];
let input = ["6 3", "1 2", "2 3", "3 4", "0 0"];
// let input = ["6 5", "1 2", "2 3", "3 4", "4 5", "5 6", "0 0"];
// let input = ["6 6", "1 2", "2 3", "1 3", "4 5", "5 6", "6 4", "0 0"];
input = input.map((v) => v.split(" ").map(Number));
input.pop();
input = input.reverse();

const answer = [];

while (input.length) {
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

  function DFS(start, node, vertext) {
    console.log(start, node, vertext);
    if (!graph[start].length) {
      if (node - 1 === vertext) {
        console.log("gotit", start, node, vertext);
        total++;
      }
      return;
    } else {
      for (let i = 0; i < graph[start].length; i++) {
        const nextNode = graph[start][i];
        if (ch[nextNode] === 0) {
          ch[nextNode] = 1;
          DFS(nextNode, node + 1, vertext + 1);
          // ch[nextNode] = 0;
        }
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (ch[i] === 0) {
      ch[i] = 1;
      DFS(i, 1, 0);
    }
  }

  console.log(total);
}
