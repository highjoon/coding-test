let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let N = Number(input[0]);
    let map = input.slice(1).map((v) => v.split("").map(Number));
    let answer = [];
    let total = 0;
    let count = [];

    function BFS(row, col) {
        const queue = [];
        let tempCount = 0;
        let idx = 0;

        queue.push([row, col]);
        map[row][col] = 0;

        while (idx !== queue.length) {
            let [curRow, curCol] = queue[idx];
            tempCount++;

            for (let [nRow, nCol] of [
                [curRow + 1, curCol],
                [curRow, curCol + 1],
                [curRow - 1, curCol],
                [curRow, curCol - 1],
            ]) {
                if (nRow < 0 || nRow >= N || nCol < 0 || nCol >= N) continue;
                if (map[nRow][nCol] === 1) {
                    map[nRow][nCol] = 0;
                    queue.push([nRow, nCol]);
                }
            }
            idx++;
        }

        return tempCount;
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (map[i][j] === 1) {
                total++;
                count.push(BFS(i, j));
            }
        }
    }

    count.sort((a, b) => a - b);
    answer = [total, ...count];
    return answer.join("\n");
}

console.log(solution(input));
