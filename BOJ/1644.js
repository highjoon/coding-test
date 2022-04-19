let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);
let primes = [];

function eratosthenesSieve(array, number) {
  let tempArray = [];

  for (let i = 2; i <= number; i++) {
    tempArray[i] = i;
  }

  for (let i = 2; i <= number; i++) {
    if (tempArray[i] === 0) {
      continue;
    }

    for (let j = i + i; j <= number; j += i) {
      tempArray[j] = 0;
    }
  }

  for (let i = 2; i <= number; i++) {
    if (tempArray[i] !== 0) {
      array.push(tempArray[i]);
    }
  }

  return array;
}

eratosthenesSieve(primes, N);

let left = 0;
let right = 1;
let sum = primes[left];
let answer = 0;

while (left < primes.length && right < primes.length) {
  if (sum === N) {
    answer++;
    sum += primes[right++];
  } else if (sum > N) {
    sum -= primes[left++];
  } else {
    sum += primes[right++];
  }
}

if (primes[primes.length - 1] === N) {
  answer++;
}

console.log(answer);
