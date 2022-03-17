function solution(S, T) {
  const N = T.length;
  let target = S.substr(0, N).split("");
  let answer = 0;
  let isFlag = true;

  let hash = new Map();
  for (let x of T) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }

  for (let rt = N; rt <= S.length; rt++) {
    isFlag = true;
    let temp = new Map(Array.from(hash).slice());

    for (let x of target) {
      if (!temp.has(x) || temp.get(x) === 0) {
        isFlag = false;
        break;
      } else {
        temp.set(x, temp.get(x) - 1);
      }
    }
    if (isFlag) answer++;
    target.push(S[rt]);
    target.shift();
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
