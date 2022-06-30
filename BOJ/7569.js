let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N, H] = input[0].split(" ").map(Number);
input = input.slice(1).map((v) => v.trim().split(" ").map(Number));
const box = Array.from({ length: H }, () => new Array());
const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dh = [0, 0, 0, 0, 1, -1];
const queue = [];
let answer = 0;

for (let i = 0; i < H; i++) {
    const idx = i * N;
    for (let j = idx; j < idx + N; j++) {
        box[i].push(input[j]);
    }
}

for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < M; k++) {
            if (box[i][j][k] === 1) {
                queue.push([i, j, k, 0]);
            }
        }
    }
}

let idx = 0;
let day = 0;
while (idx !== queue.length) {
    const [h, y, x, cnt] = queue[idx];
    for (let i = 0; i < dx.length; i++) {
        const [nh, ny, nx] = [h + dh[i], y + dy[i], x + dx[i]];
        if (nx >= 0 && nx < M && ny >= 0 && ny < N && nh >= 0 && nh < H) {
            if (box[nh][ny][nx] === 0) {
                box[nh][ny][nx] = 1;
                queue.push([nh, ny, nx, cnt + 1]);
            }
        }
    }
    idx++;
    day = cnt;
}

answer = day;

for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < M; k++) {
            if (box[i][j][k] === 0) {
                answer = -1;
                break;
            }
        }
        if (answer === -1) break;
    }
    if (answer === -1) break;
}

console.log(answer);
