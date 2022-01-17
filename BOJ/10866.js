let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const deque = [];
const result = [];

for (let i = 0; i < N; i++) {
  switch (input[i]) {
    case "pop_front":
      result.push(deque.shift() || -1);
      break;
    case "pop_back":
      result.push(deque.pop() || -1);
      break;
    case "size":
      result.push(deque.length);
      break;
    case "empty":
      deque.length ? result.push(0) : result.push(1);
      break;
    case "front":
      result.push(deque[0] || -1);
      break;
    case "back":
      result.push(deque[deque.length - 1] || -1);
      break;
    default:
      const order = input[i].split(" ")[0];
      const newNum = input[i].split(" ")[1];

      switch (order) {
        case "push_front":
          deque.unshift(newNum);
          break;
        case "push_back":
          deque.push(newNum);
          break;
      }
      break;
  }
}
console.log(result.join("\n"));
