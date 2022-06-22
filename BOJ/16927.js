// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let [N, M, R] = input[0].split(" ").map(Number);
}

// console.log(solution(input));
console.log(
  solution(["4 4 2", "1 2 3 4", "5 6 7 8", "9 10 11 12", "13 14 15 16"])
);
console.log(
  solution([
    "5 4 7",
    "1 2 3 4",
    "7 8 9 10",
    "13 14 15 16",
    "19 20 21 22",
    "25 26 27 28",
  ])
);
console.log(solution(["2 2 3", "1 1", "1 1"]));
