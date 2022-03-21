function solution(n, k) {
  let answer;
  const queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length !== 1) {
    let count = k;
    while (count !== 1) {
      queue.push(queue.shift());
      count--;
    }
    queue.shift();
  }
  answer = queue[0];
  return answer;
}

console.log(solution(8, 3));
