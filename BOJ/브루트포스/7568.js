let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
let answer = "";

for (let i = 0; i < N; i++) {
  let targetWeight = Number(input[i].split(" ")[0]);
  let targetHeight = Number(input[i].split(" ")[1]);
  let grade = 1;

  for (let j = 0; j < N; j++) {
    let compareWeight = Number(input[j].split(" ")[0]);
    let compareHeight = Number(input[j].split(" ")[1]);

    if (compareWeight > targetWeight && compareHeight > targetHeight) {
      grade++;
    }
  }

  answer += `${grade} `;
}

console.log(answer);
