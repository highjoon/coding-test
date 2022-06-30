let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = input.shift();
const stack = [];
let answer = "";

const array = Array.from({ length: n }, (v, i) => i + 1);

for (let i = 0; i < n; i++) {
    let count = 1;

    while (count <= n && stack[stack.length - 1] != input[i]) {
        stack.push(array.shift());
        answer += "+\n";
        count++;
    }

    if (stack[stack.length - 1] == input[i]) {
        stack.pop();
        answer += "-\n";
    } else {
        answer = "NO";
        break;
    }
}

console.log(answer);
