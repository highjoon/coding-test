let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
input = input.slice(1).reverse();

const dx = [-1, 1, 2, 2, 1, -1, -2, -2];
const dy = [-2, -2, -1, 1, 2, 2, -1, 1];
const answer = [];

while (input.length) {
    const L = Number(input.pop());
    let current = input.pop().split(" ").map(Number);
    let target = input.pop().split(" ").map(Number);
    const ch = Array.from({ length: L }, () => Array(L).fill(0));
    const queue = [[...current, 0]];

    function BFS() {
        let idx = 0;

        while (idx !== queue.length) {
            const [x, y, cnt] = queue[idx];

            if (x === target[0] && y === target[1]) {
                return cnt;
            } else {
                for (let i = 0; i < dx.length; i++) {
                    const [nx, ny] = [x + dx[i], y + dy[i]];
                    if (nx >= 0 && nx < L && ny >= 0 && ny < L) {
                        if (ch[nx][ny] === 0) {
                            ch[nx][ny] = 1;
                            queue.push([nx, ny, cnt + 1]);
                        }
                    }
                }
            }
            idx++;
        }

        return cnt;
    }

    answer.push(BFS());
}

console.log(answer.join("\n"));
