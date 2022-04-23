function eratosthenesSieve(number) {
  let count = 0;
  let tempArray = [];

  for (let i = 2; i <= number; i++) {
    tempArray[i] = i;
  }

  for (let i = 2; i <= number; i++) {
    if (tempArray[i] === 0) continue;
    for (let j = i + i; j <= number; j += i) {
      tempArray[j] = 0;
    }
  }

  for (let i = 2; i <= number; i++) {
    if (tempArray[i] !== 0) {
      count++;
    }
  }

  return count;
}

function solution(n) {
  const answer = eratosthenesSieve(n);
  return answer;
}

console.log(solution(10));
console.log(solution(5));
