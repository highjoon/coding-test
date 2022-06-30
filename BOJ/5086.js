let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();
for (let testCase of input) {
    const [num1, num2] = testCase.split(" ").map((v) => Number(v));
    if (num2 % num1 === 0) console.log("factor");
    else if (num1 % num2 === 0) console.log("multiple");
    else console.log("neither");
}
