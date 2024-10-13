let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let N = Number(input[0]);
    input = input.slice(1);
    const answer = [];

    function nextPermutation(word) {
        let arr = word.split("");
        let i = arr.length - 2;
        let j = arr.length - 1;

        while (i >= 0 && arr[i] >= arr[i + 1]) i--;

        if (i === -1) return false;

        while (arr[i] >= arr[j]) j--;

        [arr[i], arr[j]] = [arr[j], arr[i]];

        let front = arr.slice(0, i + 1);
        let back = arr.slice(i + 1).reverse();

        return [...front, ...back].join("");
    }

    for (let word of input) {
        let result = nextPermutation(word);

        if (result) answer.push(result);
        else answer.push(word);
    }

    return answer.join("\n");
}

console.log(solution(input));
