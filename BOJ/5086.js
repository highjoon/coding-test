let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = ["8 16", "32 4", "17 5", "0 0"];

input.pop();
for (let testCase of input) {
  const [num1, num2] = testCase.split(" ").map((v) => Number(v));
  if (num2 % num1 === 0) console.log("factor");
  else if (num1 % num2 === 0) console.log("multiple");
  else console.log("neither");
}
