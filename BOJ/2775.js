const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
    const k = +input.shift();
    const n = +input.shift();

    const apt = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        apt[0][i] = i;
    }

    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= n; j++) {
            apt[i][j] = apt[i - 1][j] + apt[i][j - 1];
        }
    }

    console.log(apt[k][n]);
}
