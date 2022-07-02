function solution(board) {
    if (board.length < 2 || board[0].length < 2) return 1;
    let answer = 0;

    for (let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[i].length; j++) {
            if (board[i][j] >= 1) {
                board[i][j] += Math.min(board[i][j - 1], board[i - 1][j - 1], board[i - 1][j]);
                answer = Math.max(answer, board[i][j] * board[i][j]);
            }
        }
    }
    return answer;
}

console.log(
    solution([
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 0, 1, 0],
    ])
);

console.log(
    solution([
        [0, 0, 1, 1],
        [1, 1, 1, 1],
    ])
);
