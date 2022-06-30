let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    const N = Number(input);
    const len = N * 4 - 3;
    let answer = Array.from({ length: len }, () => Array(len).fill(" "));

    function recursion(row, col, n) {
        if (n === 0) return;
        const len = n * 4 - 3;
        for (let i = row; i < len + row; i++) {
            if (i > row && i < len + row - 1) continue;
            for (let j = col; j < len + col; j++) {
                answer[i][j] = "*";
                answer[j][i] = "*";
            }
        }

        return recursion(row + 2, col + 2, n - 1);
    }

    recursion(0, 0, N);

    return answer.map((v) => v.join("")).join("\n");
}

console.log(solution(input));
