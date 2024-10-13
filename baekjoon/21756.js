let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    const N = Number(input);
    let arr = Array.from({ length: N }, (v, i) => (v = i + 1));

    while (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            if ((i + 1) % 2 !== 0) arr[i] = 0;
        }
        arr = arr.filter((v) => v !== 0);
    }
    return arr[0];
}

console.log(solution(input));
