let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let result = 0;

for (let dial of input) {
    if (dial === "A" || dial === "B" || dial === "C") {
        result += 3;
    } else if (dial === "D" || dial === "E" || dial === "F") {
        result += 4;
    } else if (dial === "G" || dial === "H" || dial === "I") {
        result += 5;
    } else if (dial === "J" || dial === "K" || dial === "L") {
        result += 6;
    } else if (dial === "M" || dial === "N" || dial === "O") {
        result += 7;
    } else if (dial === "P" || dial === "Q" || dial === "R" || dial === "S") {
        result += 8;
    } else if (dial === "T" || dial === "U" || dial === "V") {
        result += 9;
    } else if (dial === "W" || dial === "X" || dial === "Y" || dial === "Z") {
        result += 10;
    }
}

console.log(result);
