let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(BigInt);

let [A, B, C] = input;
let answer = 0;

function pow(a, b) {
    if (b == 0) {
        return BigInt(1);
    } else {
        const temp = pow(a, BigInt(parseInt(b / BigInt(2))));
        if (b % BigInt(2) == 0) {
            return (temp * temp) % C;
        } else {
            return (temp * temp * a) % C;
        }
    }
}

answer = parseInt(pow(A, B));
console.log(answer);
