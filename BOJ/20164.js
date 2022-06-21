let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  function count(num) {
    let result = 0;
    for (let x of num) {
      if (Number(x) % 2 !== 0) result++;
    }
    return result;
  }

  function recursion(n, oddCount) {
    oddCount += count(n);
    if (n.length === 1) {
      min = Math.min(min, oddCount);
      max = Math.max(max, oddCount);
      return;
    } else if (n.length === 2) {
      let temp = Number(n[0]) + Number(n[1]);
      recursion(temp.toString(), oddCount);
    } else {
      for (let i = 1; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
          let temp =
            Number(n.substring(0, i)) +
            Number(n.substring(i, j)) +
            Number(n.substring(j));
          recursion(temp.toString(), oddCount);
        }
      }
    }
  }

  recursion(input, 0);

  return `${min} ${max}`;
}

console.log(solution(input));
