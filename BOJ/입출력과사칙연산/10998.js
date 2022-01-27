let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const A = input[0];
const B = input[1];
console.log(A * B);
