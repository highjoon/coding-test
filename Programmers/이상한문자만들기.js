function solution(s) {
  const answer = s
    .split(" ")
    .map((v) =>
      v
        .split("")
        .map((x, i) => (i % 2 === 0 ? x.toUpperCase() : x.toLowerCase()))
        .join("")
    )
    .join(" ");
  return answer;
}

console.log(solution("try hello world"));
