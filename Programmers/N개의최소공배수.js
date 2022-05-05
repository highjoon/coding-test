function solution(arr) {
  function getGCD(num1, num2) {
    return num1 % num2 === 0 ? num2 : getGCD(num2, num1 % num2);
  }

  function getLCM(num1, num2) {
    return (num1 * num2) / getGCD(num1, num2);
  }

  const stack = arr;
  while (stack.length !== 1) {
    stack.push(getLCM(stack.pop(), stack.pop()));
  }
  return stack[0];
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
