function solution(citations) {
  let answer = 0;
  citations = citations.sort((a, b) => b - a);
  for (let i = 1; i <= citations.length; i++) {
    if (citations[i - 1] >= i) {
      answer++;
    }
  }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
