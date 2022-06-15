let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let board = input.slice(0, 5).map((v) => v.split(" ").map(Number));
  let nums = input.slice(5).map((v) => v.split(" ").map(Number));
  let answer = 0;
  let bingoCount = 0;
  const checkDirections = [
    [
      [0, -5],
      [0, -4],
      [0, -3],
      [0, -2],
      [0, -1],
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
    ],
    [
      [-5, 0],
      [-4, 0],
      [-3, 0],
      [-2, 0],
      [-1, 0],
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
    ],
    [
      [-5, 5],
      [-4, 4],
      [-3, 3],
      [-2, 2],
      [-1, 1],
      [0, 0],
      [1, -1],
      [2, -2],
      [3, -3],
      [4, -4],
      [5, -5],
    ],
    [
      [-5, -5],
      [-4, -4],
      [-3, -3],
      [-2, -2],
      [-1, -1],
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
    ],
  ];

  function markNum(num) {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === num) {
          board[row][col] = "X";
          answer++;
          return [row, col];
        }
      }
    }
  }

  function countBingo(row, col) {
    for (let i = 0; i < checkDirections.length; i++) {
      const currentDirection = checkDirections[i];
      let count = 0;
      for (let j = 0; j < currentDirection.length; j++) {
        const [nRow, nCol] = [
          row + currentDirection[j][0],
          col + currentDirection[j][1],
        ];
        if (nRow < 0 || nRow >= 5 || nCol < 0 || nCol >= 5) continue;
        if (board[nRow][nCol] === "X") count++;
      }
      if (count === 5) bingoCount++;
    }
  }

  for (let row = 0; row < nums.length; row++) {
    for (let col = 0; col < nums[row].length; col++) {
      const [markedRow, markedCol] = markNum(nums[row][col]);
      countBingo(markedRow, markedCol);
      if (bingoCount >= 3) return answer;
    }
  }
}

console.log(solution(input));
