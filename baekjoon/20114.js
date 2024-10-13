let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, H, W] = input[0].split(" ").map(Number);
    input = input.slice(1).map((v) => v.split(""));
    let result = Array.from({ length: N }, () => "?");
    let answer;

    for (let arr of input) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= "a" && arr[i] <= "z") {
                result[Math.floor(i / W)] = arr[i];
            }
        }
    }

    answer = result.join("");
    return answer;
}

console.log(solution(input));
