let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    let answer = input.length;
    let lt = 0;
    let rt = input.length - 1;

    function isPalindrome() {
        while (lt <= rt) {
            if (input[lt] !== input[rt]) {
                return false;
            }
            lt++;
            rt--;
        }
        return true;
    }

    if (isPalindrome()) {
        return new Set(input).size === 1 ? -1 : answer - 1;
    } else {
        return answer;
    }
}

console.log(solution(input));
