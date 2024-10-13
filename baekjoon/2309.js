let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input.map((element) => parseInt(element.trim()));

const N = Number(input.length);
let sum = arr.reduce((a, b) => Number(a) + Number(b), 0);

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        if (sum - (Number(arr[i]) + Number(arr[j])) == 100) {
            arr.splice(j, 1);
            arr.splice(i, 1);
        }
    }
}

console.log(arr.sort((a, b) => Number(a) - Number(b)).join("\n"));
