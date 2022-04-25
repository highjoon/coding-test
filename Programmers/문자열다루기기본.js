function solution(s) {
  const answer = true;
  if (s.length === 4 || s.length === 6) {
    for (let x of s) {
      if (isNaN(Number(x))) {
        return false;
      }
    }
  } else {
    return false;
  }
  return answer;
}

console.log(solution("a234"));
console.log(solution("1234"));
