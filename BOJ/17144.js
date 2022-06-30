let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let [R, C, T] = input[0].split(" ").map(Number);
    input = input.slice(1).map((v) => v.split(" ").map(Number));
    let answer = 0;
    let upperCleaner = [0, 0];
    let lowerCleaner = [0, 0];
    let flag = false;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    function countDust() {
        for (let row = 0; row < R; row++) {
            for (let col = 0; col < C; col++) {
                if (input[row][col] > 0) answer += input[row][col];
            }
        }
    }

    function rotateUp(cleanerRow) {
        for (let row = cleanerRow - 2; row >= 0; row--) {
            input[row + 1][0] = input[row][0];
        }

        for (let col = 1; col < C; col++) {
            input[0][col - 1] = input[0][col];
        }

        for (let row = 1; row <= cleanerRow; row++) {
            input[row - 1][C - 1] = input[row][C - 1];
        }

        for (let col = C - 2; col > 0; col--) {
            input[cleanerRow][col + 1] = input[cleanerRow][col];
        }

        input[cleanerRow][1] = 0;
    }

    function rotateDown(cleanerRow) {
        for (let row = cleanerRow + 2; row < R; row++) {
            input[row - 1][0] = input[row][0];
        }

        for (let col = 1; col < C; col++) {
            input[R - 1][col - 1] = input[R - 1][col];
        }

        for (let row = R - 2; row >= cleanerRow; row--) {
            input[row + 1][C - 1] = input[row][C - 1];
        }

        for (let col = C - 2; col > 0; col--) {
            input[cleanerRow][col + 1] = input[cleanerRow][col];
        }

        input[cleanerRow][1] = 0;
    }

    for (let row = 0; row < R; row++) {
        for (let col = 0; col < C; col++) {
            if (input[row][col] === -1) {
                upperCleaner = row;
                lowerCleaner = row + 1;
                flag = true;
                break;
            }
        }
        if (flag) break;
    }

    while (T--) {
        let spreadList = [];
        for (let row = 0; row < R; row++) {
            for (let col = 0; col < C; col++) {
                if (input[row][col] > 0) {
                    const value = Math.floor(input[row][col] / 5);
                    for (let i = 0; i < 4; i++) {
                        const [nRow, nCol] = [row + dx[i], col + dy[i]];
                        if (nRow < 0 || nRow >= R || nCol < 0 || nCol >= C || input[nRow][nCol] === -1) continue;
                        spreadList.push([nRow, nCol, value]);
                        input[row][col] -= value;
                    }
                }
            }
        }

        for (let spread of spreadList) {
            const [row, col, value] = spread;
            input[row][col] += value;
        }

        rotateUp(upperCleaner);
        rotateDown(lowerCleaner);
    }

    countDust();
    return answer;
}

console.log(solution(input));
