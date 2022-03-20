function solution(str) {
  let answer = "YES";
  const stack = [];

  for (let x of str) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (!stack.length) {
        answer = "NO";
        break;
      }
      stack.pop();
    }
  }

  if (stack.length) answer = "NO";
  return answer;
}

let a = "(()(()))(()";
let b = "((()))";
console.log(solution(a));
console.log(solution(b));
