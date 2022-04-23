function solution(n) {
  const answer = Number(
    n
      .toString()
      .split("")
      .sort((a, b) => Number(b) - Number(a))
      .join("")
  );
  return answer;
}

console.log(solution(118372));
