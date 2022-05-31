let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  let mines = input.slice(1, n + 1).map((v) => v.split(""));
  let answer = input.slice(n + 1).map((v) => v.split(""));
  const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
  const dy = [-1, 0, 1, 1, 1, 0, -1, -1];
  let flag = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (answer[i][j] === "x") {
        if (mines[i][j] === "*") flag = true;
        let count = 0;
        for (let k = 0; k < dx.length; k++) {
          let nx = i + dx[k];
          let ny = j + dy[k];
          if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
          if (mines[nx][ny] === "*") count++;
        }

        answer[i][j] = count;
      }
    }
  }

  if (flag) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (mines[i][j] === "*") answer[i][j] = "*";
      }
    }
  }

  answer = answer.map((v) => v.join("")).join("\n");
  return answer;
}

console.log(solution(input));
