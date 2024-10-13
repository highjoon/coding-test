let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let [S, P] = input;

    function makeTable() {
        const length = P.length;
        let table = Array(length).fill(0);
        let j = 0;

        for (let i = 1; i < length; i++) {
            while (j > 0 && P[i] !== P[j]) {
                j = table[j - 1];
            }
            if (P[i] === P[j]) {
                j++;
                table[i] = j;
            }
        }

        return table;
    }

    let table = makeTable(P);
    const Slength = S.length;
    const Plength = P.length;
    let j = 0;

    for (let i = 0; i < Slength; i++) {
        while (j > 0 && S[i] !== P[j]) {
            j = table[j - 1];
        }
        if (S[i] === P[j]) {
            if (j === Plength - 1) return 1;
            else j++;
        }
    }

    return 0;
}

console.log(solution(input));
