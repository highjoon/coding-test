function solution(n) {
  const answer = n.toString().split("").map(Number).reverse();
  return answer;
}

console.log(solution(12345));
