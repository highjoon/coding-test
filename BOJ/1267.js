let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr = input[1].split(" ").map((el) => Number(el));
let Y = 0;
let M = 0;

for (let i = 0; i < arr.length; i++) {
    let target = Number(arr[i]);
    Y += parseInt(target / 30) * 10 + 10;
    M += parseInt(target / 60) * 15 + 15;
}

if (Y > M) {
    console.log(`M ${M}`);
} else if (Y < M) {
    console.log(`Y ${Y}`);
} else {
    console.log(`Y M ${Y}`);
}
