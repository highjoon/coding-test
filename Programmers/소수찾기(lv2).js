function solution(numbers) {
  let answer = new Set();
  let ch;
  let temp;

  for (let i = 1; i <= numbers.length; i++) {
    ch = Array.from({ length: numbers.length }, () => 0);
    temp = Array.from({ length: i }, () => 0);

    DFS(0, i);
  }

  function DFS(L, end) {
    if (L === end) {
      let num = Number(temp.join(""));
      if (isPrime(num)) answer.add(num);
      return;
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[L] = numbers[i];
          DFS(L + 1, end);
          ch[i] = 0;
        }
      }
    }
  }

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  answer = answer.size;
  return answer;
}

console.log(solution("17"));
console.log(solution("011"));
