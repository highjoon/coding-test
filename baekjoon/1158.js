let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = input[0];
const K = input[1];

const array = Array.from({ length: N }, (v, i) => i + 1);
let result = "<";

while (array.length) {
    for (let i = 0; i < K; i++) {
        array.push(array.shift());
    }

    if (array.length === 1) {
        result += `${array.pop()}>`;
    } else {
        result += `${array.pop()}, `;
    }
}

console.log(result);
