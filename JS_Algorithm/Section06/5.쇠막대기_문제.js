function solution(lasers) {
  let answer = 0;
  const stack = [];
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i];
    if (laser === "(") {
      stack.push(laser);
    } else {
      stack.pop();
      if (lasers[i - 1] === "(") answer += stack.length;
      else answer++;
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
let b = "(((()(()()))(())()))(()())";
console.log(solution(a));
console.log(solution(b));
