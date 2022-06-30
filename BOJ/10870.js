let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let n = Number(input);

function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

console.log(fibonacci(n));
