let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = input.map((v) => v.split(" ").map(Number));

const A = [];
const B = [];
const C = [];

const [N, M] = input.shift();

for (let i = 0; i < N; i++) {
    A.push(input.shift());
}

const [K, L] = input.shift();

for (let i = 0; i < K; i++) {
    B.push(input.shift());
}

while (B[0].length > 0) {
    const temp = [];

    for (let i = 0; i < K; i++) {
        temp.push(B[i].shift());
    }

    C.push(temp);
}

const answer = [];

for (let i = 0; i < N; i++) {
    answer.push([]);
    const X = A[i];

    for (let j = 0; j < L; j++) {
        let sum = 0;
        const Y = C[j];

        for (let k = 0; k < K; k++) {
            sum += X[k] * Y[k];
        }

        answer[answer.length - 1].push(sum);
    }
}

console.log(answer.map((v) => v.join(" ")).join("\n"));
