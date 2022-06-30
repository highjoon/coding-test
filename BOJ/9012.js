let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input.shift();
const result = [];

for (let x of input) {
    let temp = [];
    for (let j of x) {
        if (j === "(") {
            temp.push("(");
        } else if (temp.length && j === ")") {
            temp.pop();
        } else {
            temp.push(")");
            break;
        }
    }
    temp.length ? result.push("NO") : result.push("YES");
}

console.log(result.join("\n"));
