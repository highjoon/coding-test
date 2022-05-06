function solution(numbers) {
  let answer = new Set();
  let temp = Array.from({ length: numbers.length }, () => 0);

  for (let i = 1; i <= numbers.length; i++) {
    let ch = Array.from({ length: numbers.length }, () => 0);
    temp = Array.from({ length: i }, () => 0);

    DFS(0, i, ch);
  }

  function DFS(L, end, ch) {
    if (L === end) {
      let num = Number(temp.join(""));
      console.log(num);
      if (isPrime(num)) answer.add(num);
      return;
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[L] = numbers[i];
          DFS(L + 1, end, ch);
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
