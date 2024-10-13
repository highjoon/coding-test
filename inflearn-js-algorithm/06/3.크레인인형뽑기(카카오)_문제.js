function solution(board, moves) {
  let answer = 0;
  const stack = [];

  for (let x of moves) {
    const move = x - 1;
    for (let items of board) {
      if (items[move] !== 0) {
        const currentItem = items[move];
        items[move] = 0;
        if (stack[stack.length - 1] === currentItem) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(currentItem);
        }
        break;
      }
    }
  }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
