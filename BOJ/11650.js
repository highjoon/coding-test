let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

let answer = "";

let arr = input
    .map((v) => v.split(" ").map((x) => Number(x)))
    .sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    })
    .forEach((x) => {
        answer += `${x[0]} ${x[1]}\n`;
    });

console.log(answer);
