let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input.shift().split(" ").map(Number);
const nums = input.shift().split(" ").map(Number);

let answer = Number.MAX_SAFE_INTEGER;
let left = 0;
let right = 0;
let sum = nums[left];

while (left < N) {
  if (sum >= S) {
    answer = Math.min(answer, right - left + 1);
    sum -= nums[left++];
  } else if (sum < S) {
    right++;
    if (right === N) break;
    sum += nums[right];
  }
}

if (answer === Number.MAX_SAFE_INTEGER) console.log(0);
else console.log(answer);
