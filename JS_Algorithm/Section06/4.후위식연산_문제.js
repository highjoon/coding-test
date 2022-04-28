function solution(str) {
  let answer;
  const stack = [];
  for (let item of str) {
    if (isNaN(item)) {
      const next = stack.pop();
      const prev = stack.pop();
      stack.push(eval(`${prev}${item}${next}`));
    } else {
      stack.push(item);
    }
  }
  answer = stack.pop();
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
