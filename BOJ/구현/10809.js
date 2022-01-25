let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const baseAscii = 97;
let answer = Array.from({ length: 26 }).fill(-1);

for (let i = 0; i < input.length; i++) {
  const index = input[i].charCodeAt(0) - baseAscii;
  if (answer[index] === -1) {
    answer[index] = i;
  }
}

console.log(answer.join(" "));
