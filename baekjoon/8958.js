let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
    const selected = input[i];
    let sum = 0;
    let temp = 0;
    for (let s of selected) {
        if (s === "O") {
            temp++;
            sum += temp;
        } else {
            temp = 0;
        }
    }
    console.log(sum);
}
