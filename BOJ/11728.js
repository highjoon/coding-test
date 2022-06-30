let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

const A = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

const B = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let idxA = 0;
let idxB = 0;
let answer = [];

while (idxA < N && idxB < M) {
    if (A[idxA] === B[idxB]) {
        answer.push(A[idxA]);
        answer.push(B[idxB]);
        idxA++;
        idxB++;
    } else if (A[idxA] < B[idxB]) {
        answer.push(A[idxA]);
        idxA++;
    } else {
        answer.push(B[idxB]);
        idxB++;
    }
}

answer = answer.concat(A.slice(idxA));
answer = answer.concat(B.slice(idxB));

console.log(answer.join(" "));
