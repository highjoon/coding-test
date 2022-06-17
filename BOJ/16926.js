let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let [N, M, R] = input[0].split(" ").map(Number);
  let graph = input.slice(1).map((v) => v.split(" ").map(Number));

  while (R--) {
    for (let i = 0; i < Math.floor(Math.min(N, M) / 2); i++) {
      let sRow = i;
      let sCol = i;
      let sValue = graph[sRow][sCol];
      let prevValue;

      for (let j = i + 1; j < N - i; j++) {
        sRow = j;
        prevValue = graph[sRow][sCol];
        graph[sRow][sCol] = sValue;
        sValue = prevValue;
      }

      for (let j = i + 1; j < M - i; j++) {
        sCol = j;
        prevValue = graph[sRow][sCol];
        graph[sRow][sCol] = sValue;
        sValue = prevValue;
      }

      for (let j = i + 1; j < N - i; j++) {
        sRow = N - j - 1;
        prevValue = graph[sRow][sCol];
        graph[sRow][sCol] = sValue;
        sValue = prevValue;
      }

      for (let j = i + 1; j < M - i; j++) {
        sCol = M - j - 1;
        prevValue = graph[sRow][sCol];
        graph[sRow][sCol] = sValue;
        sValue = prevValue;
      }
    }
  }

  return graph.map((v) => v.join(" ")).join("\n");
}

console.log(solution(input));
