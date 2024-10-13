let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, ...numList] = input.map((e) => Number(e));

const result = numList.sort((a, b) => a - b);

console.log(result.join("\n"));
