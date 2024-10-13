let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    input = input.slice(1);
    let answer = 0;

    const board = [];
    for (let row = 0; row < N; row++) {
        const temp = [];
        if (row % 2 === 1) temp.push("E");
        for (let col = 0; col < M; col++) {
            temp.push(input[row][col]);
            temp.push(input[row][col]);
        }
        board.push(temp);
    }

    for (let row = 0; row < N; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === "#") {
                if (col > 0 && board[row][col - 1] === ".") answer++;
                if (col < board[row].length - 1 && board[row][col + 1] === ".") answer++;
                if (row > 0 && board[row - 1][col] === ".") answer++;
                if (row < N - 1 && board[row + 1][col] === ".") answer++;
            }
        }
    }

    return answer;
}

console.log(solution(input));
