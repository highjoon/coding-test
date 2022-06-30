let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input.shift());
let index = 1;

for (let x of input) {
    const A = Number(x.split(" ")[0]);
    const B = Number(x.split(" ")[1]);
    const C = A + B;
    console.log(`Case #${index++}: ${C}`);
}
