let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let [N, K] = input[0].split(" ").map(Number);
    input = input[1].split(" ").map(Number);

    while (true) {
        for (let i = 0; i < input.length; i++) {
            K -= input[i];
            if (K < 0) return i + 1;
        }

        for (let i = input.length - 1; i >= 0; i--) {
            K -= input[i];
            if (K < 0) return i + 1;
        }
    }
}

console.log(solution(input));
