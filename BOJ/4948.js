const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

for (let num of input) {
  if (num === 0) {
    break;
  }

  const n = num + 1;
  const m = 2 * num;
  const isPrimeNumArr = new Array(m + 1);
  let counter = 0;

  isPrimeNumArr.fill(true);
  isPrimeNumArr[0] = isPrimeNumArr[1] = false;

  for (let i = 2; i <= m; i++) {
    if (Math.pow(i, 2) > 1000000) {
      break;
    } else {
      for (let square = Math.pow(i, 2); square <= m; square += i) {
        isPrimeNumArr[square] = false;
      }
    }
  }

  for (let i = n; i <= m; i++) {
    if (isPrimeNumArr[i]) {
      counter++;
    }
  }

  console.log(counter);
}
