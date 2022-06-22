function reversal(type) {
  switch (type) {
    case upDown:
      for (let i = 0; i < N / 2; i++) {
        for (let j = 0; j < M; j++) {
          const tmp = arr[i][j];
          arr[i][j] = arr[N - 1 - i][j];
          arr[N - 1 - i][j] = tmp;
        }
      }
      break;
    case leftRight:
      for (let j = 0; j < M / 2; j++) {
        for (let i = 0; i < N; i++) {
          const tmp = arr[i][j];
          arr[i][j] = arr[i][M - 1 - j];
          arr[i][M - 1 - j] = tmp;
        }
      }
      break;
  }
}

function rotate(type) {
  const rotateArr = new Array(M).fill(0).map(() => new Array(N).fill(0));
  switch (type) {
    case toLeft:
      for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
          rotateArr[i][j] = arr[j][M - 1 - i];
        }
      }
      break;
    case toRight:
      for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
          rotateArr[i][j] = arr[N - 1 - j][i];
        }
      }
      break;
  }
  const tmp = N;
  N = M;
  M = tmp;
  arr = rotateArr;
}

function quaterRotate(type) {
  switch (type) {
    case toLeft:
      for (let i = 0; i < N / 2; i++) {
        for (let j = 0; j < M / 2; j++) {
          const tmp = arr[i][j];
          arr[i][j] = arr[i][M / 2 + j];
          arr[i][M / 2 + j] = arr[N / 2 + i][M / 2 + j];
          arr[N / 2 + i][M / 2 + j] = arr[N / 2 + i][j];
          arr[N / 2 + i][j] = tmp;
        }
      }
      break;
    case toRight:
      for (let i = 0; i < N / 2; i++) {
        for (let j = 0; j < M / 2; j++) {
          const tmp = arr[i][j];
          arr[i][j] = arr[N / 2 + i][j];
          arr[N / 2 + i][j] = arr[N / 2 + i][M / 2 + j];
          arr[N / 2 + i][M / 2 + j] = arr[i][M / 2 + j];
          arr[i][M / 2 + j] = tmp;
        }
      }
      break;
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M, R] = input[0].split(" ").map(Number);
let arr = input.slice(1, 1 + N).map((el) => el.split(" ").map(Number));
const insts = input[1 + N].split(" ").map(Number);
const [upDown, leftRight, toLeft, toRight] = [0, 1, 2, 3];

for (let i = 0; i < R; i++) {
  const inst = insts[i];
  switch (inst) {
    case 1:
      reversal(upDown);
      break;
    case 2:
      reversal(leftRight);
      break;
    case 3:
      rotate(toRight);
      break;
    case 4:
      rotate(toLeft);
      break;
    case 5:
      quaterRotate(toRight);
      break;
    case 6:
      quaterRotate(toLeft);
      break;
  }
}
console.log(arr.map((el) => el.join(" ")).join("\n"));
