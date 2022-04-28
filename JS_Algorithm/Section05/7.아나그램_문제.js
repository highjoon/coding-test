function solution(str1, str2) {
  let hash = new Map();
  const answer = "YES";

  for (let x of str1) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }

  for (let x of str2) {
    if (!hash.has(x)) return "NO";
    if (hash.has(x) && hash.get(x) === 0) return "NO";
    hash.set(x, hash.get(x) - 1);
  }

  return answer;
}

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
