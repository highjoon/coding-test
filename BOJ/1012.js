let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
input = input.slice(1);

for (let t = 0; t < T; t++) {
    const [M, N, K] = input[0].split(" ").map(Number);
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    let graph = Array.from(Array(M + 1), () => Array(N + 1).fill(0));
    let answer = 0;

    function DFS(x, y) {
        graph[x][y] = 0;
        for (let i = 0; i < dx.length; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && nx < M && ny >= 0 && ny < N && graph[nx][ny] === 1) {
                DFS(nx, ny);
            }
        }
    }

    for (let i = 1; i <= K; i++) {
        let [a, b] = input[i].split(" ").map(Number);
        graph[a][b] = 1;
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][j] === 1) {
                DFS(i, j);
                answer++;
            }
        }
    }

    console.log(answer);
    input = input.slice(K + 1);
}
