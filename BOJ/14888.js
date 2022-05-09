let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let nums = input[1].split(" ").map(Number);
let numberOfOperators = input[2].split(" ").map(Number);

const answer = [];
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

function DFS(L, result) {
  if (L === N - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  } else {
    for (let i = 0; i < numberOfOperators.length; i++) {
      if (numberOfOperators[i] > 0) {
        numberOfOperators[i] -= 1;
        if (i === 0) DFS(L + 1, result + nums[L + 1]);
        else if (i === 1) DFS(L + 1, result - nums[L + 1]);
        else if (i === 2) DFS(L + 1, result * nums[L + 1]);
        else if (i === 3) {
          DFS(
            L + 1,
            result < 0
              ? Math.floor((result * -1) / nums[L + 1]) * -1
              : Math.floor(result / nums[L + 1])
          );
        }
        numberOfOperators[i] += 1;
      }
    }
  }
}

DFS(0, nums[0]);
answer.push(max);
answer.push(min);
console.log(answer.join("\n"));
