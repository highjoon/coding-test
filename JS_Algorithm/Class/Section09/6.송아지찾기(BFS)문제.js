function solution(start, end) {
  let answer = 0;
  let check = Array.from({ length: 10001 }, () => 0);
  let distance = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(start);
  check[start] = 1;
  distance[start] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === end) return distance[x] + 1;
      if (nx > 0 && nx <= 10000 && check[nx] === 0) {
        check[nx] = 1;
        queue.push(nx);
        distance[nx] = distance[x] + 1;
      }
    }
  }
  return answer;
}

console.log(solution(5, 14));
console.log(solution(8, 3));
