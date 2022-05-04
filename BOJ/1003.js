let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let T = input[0];
input = input.slice(1);
const answer = [];

for (let i = 0; i < T; i++) {
  let num = input[i];
  let zero = [1, 0, 1];
  let one = [0, 1, 1];

  function fib(n) {
    if (n >= zero.length) {
      for (let i = zero.length; i <= num; i++) {
        zero.push(zero[i - 1] + zero[i - 2]);
        one.push(one[i - 1] + one[i - 2]);
      }
    }
    answer.push(`${zero[num]} ${one[num]}`);
  }

  fib(num);
}

console.log(answer.join("\n"));
