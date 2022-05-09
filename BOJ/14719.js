let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [H, W] = input[0].split(" ").map(Number);
let blocks = input[1].split(" ").map(Number);
let answer = 0;

for (let i = 0; i < blocks.length; i++) {
  let currentBlock = blocks[i];
  let leftMax = Math.max(...blocks.slice(0, i));
  let rightMax = Math.max(...blocks.slice(i + 1));

  if (currentBlock >= leftMax || currentBlock >= rightMax) continue;
  if (rightMax > leftMax) {
    answer += leftMax - currentBlock;
  } else {
    answer += rightMax - currentBlock;
  }
}

console.log(answer);
