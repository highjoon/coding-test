let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let M = Number(input[0]);
let N = Number(input[1]);

const isPrime = Array(N + 1).fill(true);
isPrime[1] = false;

for (let n = 2; n <= Math.ceil(Math.sqrt(N)); n++) {
  if (isPrime[n]) {
    let m = 2;
    while (n * m <= N) {
      isPrime[n * m] = false;
      m++;
    }
  }
}

const answer = [];
for (let n = M; n <= N; n++) {
  if (isPrime[n]) {
    answer.push(n);
  }
}
console.log(answer.join("\n"));
