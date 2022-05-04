let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let dy = Array.from({ length: 1000001 }, () => 0);
let answer;

dy[1] = 1;
dy[2] = 2;

for (let i = 3; i <= input; i++) {
  dy[i] = (dy[i - 2] + dy[i - 1]) % 15746;
}

answer = dy[input];
console.log(answer);
