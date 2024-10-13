function solution(s) {
  let answer = "";
  if (s.length % 2 !== 0) {
    let idx = parseInt(s.length / 2);
    answer += s[idx];
  } else {
    let idx1 = s.length / 2 - 1;
    let idx2 = idx1 + 1 - 1;
    answer += s[idx1];
    answer += s[idx2];
  }

  return answer;
}

console.log(solution("study"));
console.log(solution("good"));
