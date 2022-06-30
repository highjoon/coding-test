let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
input = input.slice(1).map((v) => v.split("").map(Number));

let ch = Array.from({ length: 101 }, () => Array(101).fill(0));
let answer = 0;
let queue = [];

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

queue.push([0, 0]);
ch[0][0] = 1;

while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
            if (ch[ny][nx] === 0 && input[ny][nx] === 1) {
                ch[ny][nx] = ch[y][x] + 1;
                queue.push([nx, ny]);
            }
        }
    }
}

answer = ch[N - 1][M - 1];
console.log(answer);
