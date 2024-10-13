let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

function solution(input) {
    const vowels = ["a", "i", "y", "e", "o", "u"];
    const consonants = [
        "b",
        "k",
        "x",
        "z",
        "n",
        "h",
        "d",
        "c",
        "w",
        "g",
        "p",
        "v",
        "j",
        "q",
        "t",
        "s",
        "r",
        "l",
        "m",
        "f",
    ];

    const isAlphabet = (str) => {
        if ((str >= "a" && str <= "z") || (str >= "A" && str <= "Z")) {
            return true;
        }
        return false;
    };

    const answer = [];

    for (let i = 0; i < input.length - 1; i++) {
        const arr = input[i].split("");
        let result = "";
        let translated;

        for (let j = 0; j < arr.length; j++) {
            if (isAlphabet(arr[j])) {
                const temp = arr[j].toLowerCase();

                if (vowels.includes(temp)) {
                    translated = vowels[(vowels.indexOf(temp) + 3) % vowels.length];
                } else {
                    translated = consonants[(consonants.indexOf(temp) + 10) % consonants.length];
                }

                if (arr[j] === temp) result += translated;
                else result += translated.toUpperCase();
            } else {
                result += arr[j];
            }
        }

        answer.push(result);
    }

    return answer.join("\n");
}

console.log(solution(input));
