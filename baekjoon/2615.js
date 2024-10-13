let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const board = input.map((v) => v.split(" ").map(Number));
    const dx = [-1, 0, 1, 1];
    const dy = [1, 1, 1, 0];
    let answer = [];
    let ansRow;
    let ansCol;

    function check(row, col, target) {
        for (let i = 0; i < dx.length; i++) {
            let [nRow, nCol] = [row + dx[i], col + dy[i]];
            let count = 1;

            while (true) {
                if (nRow < 0 || nRow >= 19 || nCol < 0 || nCol >= 19) break;
                if (board[nRow][nCol] !== target) break;
                count++;
                nRow += dx[i];
                nCol += dy[i];
            }

            if (count === 5) {
                const [prevRow, prevCol] = [row - dx[i], col - dy[i]];
                if (
                    prevRow >= 0 &&
                    prevRow < 19 &&
                    prevCol >= 0 &&
                    prevCol < 19 &&
                    board[prevRow][prevCol] === target
                ) {
                    continue;
                }
                answer.push(target);
                ansRow = row;
                ansCol = col;
                return true;
            }
        }
        return false;
    }

    for (let row = 0; row < 19; row++) {
        for (let col = 0; col < 19; col++) {
            if (board[row][col] === 0) continue;
            if (check(row, col, board[row][col])) {
                answer.push(`${ansRow + 1} ${ansCol + 1}`);
                return answer.join("\n");
            }
        }
    }
    return 0;
}

console.log(solution(input));
