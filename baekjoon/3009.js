const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const strToInt = input.map((coords) => coords.split(" ").map((num) => parseInt(num)));

let x = 0;
let y = 0;
if (strToInt[0][0] !== strToInt[1][0]) {
    if (strToInt[0][0] !== strToInt[2][0]) {
        x = strToInt[0][0];
    } else {
        x = strToInt[1][0];
    }
} else {
    x = strToInt[2][0];
}

if (strToInt[0][1] !== strToInt[1][1]) {
    if (strToInt[0][1] !== strToInt[2][1]) {
        y = strToInt[0][1];
    } else {
        y = strToInt[1][1];
    }
} else {
    y = strToInt[2][1];
}

console.log(`${x} ${y}`);
