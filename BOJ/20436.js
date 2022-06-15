let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let [left, right] = input[0].split(" ");
  const alpha = input[1];
  let answer = 0;
  const coords = {
    q: ["L", [0, 0]],
    w: ["L", [0, 1]],
    e: ["L", [0, 2]],
    r: ["L", [0, 3]],
    t: ["L", [0, 4]],
    y: ["R", [0, 5]],
    u: ["R", [0, 6]],
    i: ["R", [0, 7]],
    o: ["R", [0, 8]],
    p: ["R", [0, 9]],
    a: ["L", [1, 0]],
    s: ["L", [1, 1]],
    d: ["L", [1, 2]],
    f: ["L", [1, 3]],
    g: ["L", [1, 4]],
    h: ["R", [1, 5]],
    j: ["R", [1, 6]],
    k: ["R", [1, 7]],
    l: ["R", [1, 8]],
    z: ["L", [2, 0]],
    x: ["L", [2, 1]],
    c: ["L", [2, 2]],
    v: ["L", [2, 3]],
    b: ["R", [2, 4]],
    n: ["R", [2, 5]],
    m: ["R", [2, 6]],
  };

  function getDistance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  left = coords[left][1];
  right = coords[right][1];

  for (let str of alpha) {
    const finger = coords[str][0];
    const coord = coords[str][1];

    if (
      (coord[0] === left[0] && coord[1] === left[1]) ||
      (coord[0] === right[0] && coord[1] === right[1])
    ) {
      answer++;
      continue;
    }

    if (finger === "L") {
      answer += getDistance(left[0], left[1], coord[0], coord[1]);
      left = coord;
    }

    if (finger === "R") {
      answer += getDistance(right[0], right[1], coord[0], coord[1]);
      right = coord;
    }

    answer++;
  }

  return answer;
}

console.log(solution(input));
