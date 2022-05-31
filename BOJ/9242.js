let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const numbers = [
    ["*****", "*   *", "*****"],
    ["     ", "     ", "*****"],
    ["* ***", "* * *", "*** *"],
    ["* * *", "* * *", "*****"],
    ["***  ", "  *  ", "*****"],
    ["*** *", "* * *", "* ***"],
    ["*****", "* * *", "* ***"],
    ["*    ", "*    ", "*****"],
    ["*****", "* * *", "*****"],
    ["*** *", "* * *", "*****"],
  ];

  let idx = 0;
  let matchLen = 0;
  let totalLen = 0;
  let sum = [];

  while (idx < input[0].length) {
    let result = [];
    for (let col = idx; col <= idx + 2; col++) {
      let temp = "";
      for (let row = 0; row < input.length; row++) {
        if (input[row][col] === undefined) return "BOOM!!";
        temp += input[row][col];
      }
      result.push(temp);
    }
    idx += 4;
    totalLen++;

    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (
        result[0] === numbers[i][0] &&
        result[1] === numbers[i][1] &&
        result[2] === numbers[i][2]
      ) {
        count++;
        sum.push(i);
        continue;
      }
    }
    matchLen += count;
  }

  sum = Number(sum.join(""));
  return matchLen === totalLen && sum % 6 === 0 ? "BEER!!" : "BOOM!!";
}

console.log(solution(input));
