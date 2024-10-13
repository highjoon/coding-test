let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input.shift());
const answer = [];

for (let sentence of input) {
    const result = [];
    const splited = sentence.split(" ");

    for (let word of splited) {
        const reversed = word.split("").reverse().join("");
        result.push(reversed);
    }

    answer.push(result.join(" "));
}

console.log(answer.join("\n"));
