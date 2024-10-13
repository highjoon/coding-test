let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const numbers = [
        "******   ******",
        "          *****",
        "* **** * **** *",
        "* * ** * ******",
        "***    *  *****",
        "*** ** * ** ***",
        "****** * ** ***",
        "*    *    *****",
        "****** * ******",
        "*** ** * ******",
    ];

    let result = [];
    let temp = "";
    let code = "";

    for (let i = 0; i < input[0].length; i += 4) {
        temp = "";
        for (let j = i; j <= i + 2; j++) {
            for (let k = 0; k < input.length; k++) {
                if (input[k][j] === undefined) return "BOOM!!";
                temp += input[k][j];
            }
        }
        result.push(temp);
    }

    for (let res of result) {
        let isBoom = true;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === res) {
                isBoom = false;
                code += String(i);
            }
        }
        if (isBoom) return "BOOM!!";
    }

    return Number(code) % 6 === 0 ? "BEER!!" : "BOOM!!";
}

console.log(solution(input));
