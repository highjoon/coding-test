function solution(n, m) {
  const getGCD = (a, b) => {
    return a % b === 0 ? b : getGCD(b, a % b);
  };
  const getLCM = (a, b) => {
    return (a * b) / getGCD(a, b);
  };
  const answer = [getGCD(n, m), getLCM(n, m)];
  return answer;
}

console.log(solution(3, 12));
console.log(solution(2, 5));
