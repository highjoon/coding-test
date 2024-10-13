let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
input = input
    .map((v) => v.split(" ").map(Number))
    .sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });

let answer = 0;
let endTime = Number.MIN_SAFE_INTEGER;

for (let time of input) {
    const [start, end] = time;
    if (start >= endTime) {
        answer++;
        endTime = end;
    }
}

console.log(answer);
