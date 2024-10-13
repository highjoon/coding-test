let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(N !== 0 ? factorial(N) : 1);
