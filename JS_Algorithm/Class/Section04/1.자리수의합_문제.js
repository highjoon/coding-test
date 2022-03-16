function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    const temp = x
      .toString()
      .split("")
      .reduce((a, b) => Number(a) + Number(b), 0);
    if (temp > max) {
      max = temp;
      answer = x;
    } else if (temp === max) {
      answer = Math.max(answer, x);
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
