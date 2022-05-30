let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const origin = input[1];
  const len = origin.length;
  input = input.slice(2);
  let answer = 0;

  for (let i = 0; i < N; i++) {
    const current = input[i];
    let flag = false;

    for (let j = 0; j < current.length; j++) {
      if (current[j] === origin[0]) {
        for (let k = j; k < current.length; k++) {
          if (flag) break;
          if (current[k] === origin[origin.length - 1]) {
            let avg = Math.floor((k - j) / (len - 1));
            let count = 0;
            while (count < len) {
              if (current[j + avg * count] === origin[count]) {
                count++;
              } else {
                break;
              }
            }
            if (count === len && !flag) {
              answer++;
              flag = true;
            }
          }
        }
      }
    }
  }

  return answer;
}

console.log(solution(input));
