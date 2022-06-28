let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let [k, n] = [Number(input[0]), Number(input[1])];
  let final = input[2].split("");
  input = input.slice(3).map((v) => v.split(""));
  let alpha = Array.from({ length: k }, (_, i) => String.fromCharCode(65 + i));
  let result = "";
  let flag = false;

  for (let row = 0; row < n; row++) {
    if (input[row][0] === "?") break;
    for (let col = 0; col < k - 1; col++) {
      if (input[row][col] === "-") [alpha[col], alpha[col + 1]] = [alpha[col + 1], alpha[col]];
    }
  }

  for (let row = n - 1; row >= 0; row--) {
    if (input[row][0] === "?") break;
    for (let col = k - 2; col >= 0; col--) {
      if (input[row][col] === "-") [final[col], final[col + 1]] = [final[col + 1], final[col]];
    }
  }

  for (let i = 0; i < alpha.length - 1; i++) {
    if (alpha[i] === final[i + 1] && alpha[i + 1] === final[i]) result += "-";
    else result += "*";
  }

  for (let i = 0; i < alpha.length - 1; i++) {
    if (result[i] === "-") [alpha[i], alpha[i + 1]] = [alpha[i + 1], alpha[i]];
  }

  if (alpha.join("") === final.join("")) return result;
  return "x".repeat(k - 1);
}

console.log(solution(input));
