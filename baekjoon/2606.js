let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let M = Number(input.shift());

input = input.map((v) => v.split(" ").map(Number));
let graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
let ch = Array.from({ length: N + 1 }, () => 0);
const queue = [];
let answer = 0;

for (let [a, b] of input) {
    graph[a][b] = 1;
    graph[b][a] = 1;
}

queue.push(1);
ch[1] = 1;

function BFS() {
    while (queue.length) {
        let nv = queue.shift();
        for (let i = 1; i <= N; i++) {
            if (graph[nv][i] === 1 && ch[i] === 0) {
                ch[i] = 1;
                queue.push(i);
                answer++;
            }
        }
    }
}

BFS();
console.log(answer);
