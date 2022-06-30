const num = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let start = num - (num + "").length * 9;
let answer = 0;
if (start < 0) start = 0;
for (let i = start; i < num; i++) {
    if (
        i
            .toString()
            .split("")
            .map((n) => parseInt(n))
            .reduce((acc, n) => acc + n, 0) +
            i ===
        num
    ) {
        answer = i;
        break;
    }
}
console.log(answer);
