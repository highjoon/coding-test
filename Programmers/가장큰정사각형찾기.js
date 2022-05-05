function solution(board) {
  if (board.length < 2 || board[0].length < 2) return 1;
  let answer = 0;

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j] >= 1) {
        let min = Math.min(
          board[i - 1][j],
          board[i - 1][j - 1],
          board[i][j - 1]
        );
        board[i][j] += min;
      }
    }
    answer = Math.max(...board[i], answer);
  }
  answer = answer * answer;
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
