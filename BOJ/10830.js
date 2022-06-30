const fs = require("fs");
const input = fs
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" "));

const N = Number(input[0][0]);
const B = BigInt(input[0][1]);
const matrix = input.splice(1).map((v) => v.map((x) => Number(x) % 1000));

const answer = powerMatrix(matrix, B)
    .map((v) => v.join(" "))
    .join("\n");

console.log(answer);

function powerMatrix(arr, k) {
    if (k == BigInt(1)) return arr;

    const temp = powerMatrix(arr, k / BigInt(2));

    if (k % BigInt(2) == BigInt(0)) {
        return multiMatrix(temp, temp);
    } else {
        return multiMatrix(multiMatrix(temp, temp), arr);
    }
}

function multiMatrix(A, B) {
    const C = changeMatrix(B);
    const answer = [];

    for (let i = 0; i < N; i++) {
        answer.push([]);
        const X = A[i];

        for (let j = 0; j < N; j++) {
            let sum = 0;
            const Y = C[j];

            for (let k = 0; k < N; k++) {
                sum += X[k] * Y[k];
            }

            answer[answer.length - 1].push(sum % 1000);
        }
    }

    return answer;
}

function changeMatrix(arr) {
    const subMtrx = [];

    for (let i = 0; i < arr.length; i++) {
        subMtrx.push([]);

        for (let j = 0; j < arr.length; j++) {
            subMtrx[subMtrx.length - 1].push(arr[j][i]);
        }
    }

    return subMtrx;
}
