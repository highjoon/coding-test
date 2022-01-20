let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(A % B);
