let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  let bulbs = input[1].split(" ").map(Number);
  const orders = input.slice(2).map((v) => v.split(" ").map(Number));

  for (let order of orders) {
    let L;
    let R;
    if (order[0] === 1) {
      bulbs[order[1] - 1] = order[2];
    } else if (order[0] === 2) {
      L = order[1] - 1;
      R = order[2];
      for (let i = L; i < R; i++) {
        if (bulbs[i] === 0) bulbs[i] = 1;
        else bulbs[i] = 0;
      }
    } else if (order[0] === 3) {
      L = order[1] - 1;
      R = order[2];
      for (let i = L; i < R; i++) {
        bulbs[i] = 0;
      }
    } else {
      L = order[1] - 1;
      R = order[2];
      for (let i = L; i < R; i++) {
        bulbs[i] = 1;
      }
    }
  }

  return bulbs.join(" ");
}

console.log(solution(input));
