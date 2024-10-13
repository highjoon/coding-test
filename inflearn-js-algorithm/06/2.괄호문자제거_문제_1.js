function solution(str) {
  let answer = "";
  let depthCount = 0;

  for (let x of str) {
    if (x === "(") {
      depthCount++;
    } else if (x === ")") {
      depthCount--;
    } else {
      if (depthCount === 0) {
        answer += x;
      }
    }
  }

  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
