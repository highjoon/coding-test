function solution(size, arr) {
  let queue = [];
  for (let n of arr) {
    if (queue.includes(n)) {
      const idx = queue.indexOf(n);
      queue.splice(idx, 1);
    }
    queue.unshift(n);

    while (queue.length > size) {
      queue.pop();
    }
  }
  return queue;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
