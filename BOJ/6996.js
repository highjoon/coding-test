let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = Number(input[0]);
    input = input.slice(1).map((v) => v.split(" "));
    const answer = [];

    const isAnagrams = (A, B) => {
        answer.push(`${A} & ${B} are anagrams.`);
    };

    const isNotAnagrams = (A, B) => {
        answer.push(`${A} & ${B} are NOT anagrams.`);
    };

    for (let words of input) {
        let [A, B] = words;
        if (A.length !== B.length) isNotAnagrams(A, B);
        else {
            const sortedA = A.split("").sort().join("");
            const sortedB = B.split("").sort().join("");

            sortedA === sortedB ? isAnagrams(A, B) : isNotAnagrams(A, B);
        }
    }

    return answer.join("\n");
}

console.log(solution(input));
