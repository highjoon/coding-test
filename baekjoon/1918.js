let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    const stack = [];
    let answer = "";

    for (let str of input) {
        switch (str) {
            case "(":
                stack.push(str);
                break;
            case ")":
                while (stack.length && stack[stack.length - 1] !== "(") {
                    answer += stack.pop();
                }
                stack.pop();
                break;
            case "*":
            case "/":
                while (stack.length && (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")) {
                    answer += stack.pop();
                }
                stack.push(str);
                break;
            case "+":
            case "-":
                while (stack.length && stack[stack.length - 1] !== "(") {
                    answer += stack.pop();
                }
                stack.push(str);
                break;
            default:
                answer += str;
                break;
        }
    }

    while (stack.length) {
        answer += stack.pop();
    }

    return answer;
}

console.log(solution(input));
