let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);

let dy = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
let arr = [];
let len = N;
let x1;
let x2;
let y1;
let y2;
let answer = [];

while (len--) {
    arr.push(input.shift().split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        dy[i + 1][j + 1] = dy[i][j + 1] + dy[i + 1][j] - dy[i][j] + arr[i][j];
    }
}

for (let i = 0; i < M; i++) {
    [x1, y1, x2, y2] = input[i].split(" ").map(Number);
    answer.push(dy[x2][y2] - (dy[x1 - 1][y2] + dy[x2][y1 - 1] - dy[x1 - 1][y1 - 1]));
}

console.log(answer.join("\n"));
