let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let inputs = [];
let isNotZero = true;
let i = 0;
let result = "";

while (isNotZero) {
    if (i !== 0) {
        result += "\n";
    }

    inputs.push(input[i].split(" "));
    let sum = Number(inputs[i][0]) + Number(inputs[i][1]);
    if (sum === 0) {
        isNotZero = false;
    } else {
        result += sum.toString();
        i++;
    }
}

console.log(result);
