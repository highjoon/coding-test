let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [M, N] = input[0].split(" ").map(Number);
let box = input.slice(1).map((v) => v.split(" ").map(Number));
let ch = Array.from({ length: 1001 }, () => Array(1001).fill(0));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const queue = [];
let answer = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (box[i][j] === 1) {
            queue.push([i, j, 0]);
        }
    }
}

let idx = 0;
let day = 0;

while (idx !== queue.length) {
    let [y, x, cnt] = queue[idx];
    for (let i = 0; i < dx.length; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
            if (box[ny][nx] === 0) {
                box[ny][nx] = box[y][x] + 1;
                queue.push([ny, nx, cnt + 1]);
            }
        }
    }
    day = cnt;
    idx++;
}

answer = day;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (box[i][j] === 0) {
            answer = -1;
            break;
        }
    }
    if (answer === -1) break;
}

console.log(answer);
