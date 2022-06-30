let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    const answer = "YES";
    const capableList = ["pi", "ka", "chu"];
    const set = Array.from(new Set(capableList.join("")));
    input = input.split("");

    while (input.length) {
        const cur = input.pop();
        if (!set.includes(cur)) {
            return "NO";
        }

        if (cur === "u" && input[input.length - 1] === "h" && input[input.length - 2] === "c") {
            input.pop();
            input.pop();
        } else if (capableList.includes(input[input.length - 1] + cur)) {
            input.pop();
        } else {
            return "NO";
        }
    }

    return answer;
}

console.log(solution(input));
