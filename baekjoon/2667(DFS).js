let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let N = Number(input[0]);
    let map = input.slice(1).map((v) => v.split("").map(Number));
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    let answer = [];
    let temp = [];
    let totalCount = 0;
    let houseCount = 0;

    function DFS(x, y) {
        map[x][y] = 0;
        houseCount++;
        for (let i = 0; i < dx.length; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && nx < N && ny >= 0 && ny < N && map[nx][ny] === 1) {
                DFS(nx, ny);
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (map[i][j] === 1) {
                totalCount++;
                houseCount = 0;
                DFS(i, j);
                temp.push(houseCount);
            }
        }
    }

    DFS(0, 0);
    temp = temp.sort((a, b) => a - b);
    answer.push(totalCount);
    answer = answer.concat(temp);

    return answer.join("\n");
}

console.log(solution(input));
