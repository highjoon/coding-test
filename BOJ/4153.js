let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let line of inputs) {
  let nums = line.split(" ").map((v) => parseInt(v));

  if (!nums[0]) {
    break;
  }

  nums.sort((a, b) => {
    return a - b;
  });

  if (nums[0] * nums[0] + nums[1] * nums[1] === nums[2] * nums[2]) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
