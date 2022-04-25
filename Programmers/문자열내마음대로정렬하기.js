function solution(arr, n) {
  const answer = arr.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
  return answer;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
