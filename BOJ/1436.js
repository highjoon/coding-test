let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);
let title = 665;

while (N) {
  title++;
  if (String(title).includes("666")) {
    N--;
  }
}

console.log(title);
