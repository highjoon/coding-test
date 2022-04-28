function solution(m, arr) {
  const answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  let ch = Array.from({ length: arr.length }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice().join(" "));
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  answer.push(answer.length);
  return answer.join("\n");
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
