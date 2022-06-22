let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  input = input.slice(1).map((v) => v.split(" ").map(Number));
  let calendar = Array(366).fill(0);
  let row = 0;
  let col = 0;
  let answer = 0;

  for (let work of input) {
    const [start, end] = work;
    for (let i = start; i <= end; i++) {
      calendar[i]++;
    }
  }

  for (let i = 0; i < calendar.length; i++) {
    if (calendar[i] !== 0) {
      row = Math.max(row, calendar[i]);
      col++;
    } else {
      answer += row * col;
      row = 0;
      col = 0;
    }
  }

  answer += row * col;
  return answer;
}

console.log(solution(input));