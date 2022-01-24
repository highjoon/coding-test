let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

function factorization(num) {
  let div = 2;

  while (num != 1) {
    if (num % div === 0) {
      console.log(div);
      num /= div;
    } else {
      div++;
    }
  }
}

factorization(N);
