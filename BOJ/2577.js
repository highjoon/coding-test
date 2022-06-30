let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);
let sum = A * B * C;
sum = sum.toString();

let obj = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

for (let str of sum) {
    const tempNum = Number(str);
    obj[tempNum]++;
}

for (let x in obj) {
    console.log(obj[x]);
}
