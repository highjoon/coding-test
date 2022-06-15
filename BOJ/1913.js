let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let N = Number(input[0]);
  let num = N * N;
  let target = Number(input[1]);
  let board = Array.from({ length: N }, () => Array(N).fill(0));
  let answer = null;
  let targetPos = null;
  let curRow = 0;
  let curCol = 0;
  let loopCnt = Math.floor(N / 2);

  while (loopCnt--) {
    let rowLen = curRow;
    let colLen = curCol;

    for (let row = curRow; row < N - rowLen; row++) {
      if (num === target) targetPos = [row + 1, curCol + 1];

      board[row][curCol] = num--;
      curRow = row;
    }
    curCol++;

    for (let col = curCol; col < N - colLen; col++) {
      if (num === target) targetPos = [curRow + 1, col + 1];

      board[curRow][col] = num--;
      curCol = col;
    }
    curRow--;

    for (let row = curRow; row >= 0 + rowLen; row--) {
      if (num === target) targetPos = [row + 1, curCol + 1];

      board[row][curCol] = num--;
      curRow = row;
    }
    curCol--;

    for (let col = curCol; col > 0 + colLen; col--) {
      if (num === target) targetPos = [curRow + 1, col + 1];

      board[curRow][col] = num--;
      curCol = col;
    }
    curRow++;
  }

  board[Math.floor(N / 2)][Math.floor(N / 2)] = 1;
  answer = board.map((v) => v.join(" "));
  answer.push(`${targetPos[0]} ${targetPos[1]}`);

  return answer.join("\n");
}

console.log(solution(input));
