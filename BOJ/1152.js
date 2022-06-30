let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const words = input.split(" ");
let cnt = 0;

for (let word of words) {
    if (word) {
        cnt++;
    }
}

console.log(cnt);
