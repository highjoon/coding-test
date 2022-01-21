let fs = require("fs");
let N = Number(fs.readFileSync("/dev/stdin").toString().trim());

let result = "";

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N - i - 1; j++) {
    result += " ";
  }

  for (let k = 0; k <= i; k++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
