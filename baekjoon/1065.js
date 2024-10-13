let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let num = Number(input);

function solution(n) {
    let cnt = 0;

    for (let i = 1; i <= n; i++) {
        let hundreds = Math.floor((i % 1000) / 100);
        let tens = Math.floor((i % 100) / 10);
        let units = i % 10;

        if (i < 100) {
            cnt++;
        } else if (100 <= i && i < 1000) {
            if (hundreds - tens === tens - units) {
                cnt++;
            }
        }
    }

    return cnt;
}

console.log(solution(num));
