const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

const T = input.shift();

for (let i = 0; i < T; i++) {
  const n = input.shift();
  const isPrimeNumArr = new Array(n + 1);
  const primeNumArr = [];
  const checkPrimePair = [];

  isPrimeNumArr.fill(true);
  isPrimeNumArr[0] = isPrimeNumArr[1] = false;

  for (let j = 2; j <= n; j++) {
    if (Math.pow(j, 2) > 1000000) {
      break;
    } else {
      for (let square = Math.pow(j, 2); square <= n; square += j) {
        isPrimeNumArr[square] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (isPrimeNumArr[i]) {
      primeNumArr.push(i);
    }
  }

  for (let i = 0; i < primeNumArr.length; i++) {
    for (let j = i; j < primeNumArr.length; j++) {
      if (n - primeNumArr[i] - primeNumArr[j] === 0) {
        checkPrimePair.push([primeNumArr[i]]);
        checkPrimePair[checkPrimePair.length - 1].push(primeNumArr[j]);
      }
    }
  }

  let min = checkPrimePair[0][1] - checkPrimePair[0][0];
  let indexOfMin = 0;
  for (let i = 0; i < checkPrimePair.length; i++) {
    if (checkPrimePair[i][1] - checkPrimePair[i][0] < min) {
      min = checkPrimePair[i][1] - checkPrimePair[i][0];
      indexOfMin = i;
    }
  }
  console.log(checkPrimePair[indexOfMin].join(" "));
}
