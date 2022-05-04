let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let [inOrderList, postOrderList] = input
  .slice(1)
  .map((v) => v.split(" ").map(Number));
let position = [];
let answer = [];

// 루트는 항상 후위 순회의 맨 마지막에 위치.
// 중위 순회는 항상 루트를 중심으로 똑같은 크기로 분할 가능.
// 중위 순회로 구한 왼쪽 자식 트리, 오른쪽 자식 트리의 크기는 후위 순회에서도 똑같이 나눌 수 있음.
// 중위 순회에서 구한 자식 트리의 크기로 후위 순회에서도 똑같이 구할 수 있음.
// 후위 순회에서 구한 각 자식 트리도 마찬가지로, 각 트리의 맨 마지막에 있는 노드가 루트 노드.
// 후위 순회에서 구한 각 자식 트리의 루트 노드로, 중위 순회의 각 자식 트리를 또 절반씩 나눌 수 있음.
// 절반씩 나눈 중위 순회의 왼쪽 자식 트리, 오른쪽 자식 트리의 크기를 기반으로 후위 순회에서 똑같은 자식 트리를 구할 수 있음.
// 후위 순회에서 구한 각각의 자식 트리의 맨 마지막 노드가 루트 노드.
// 후위 순회에서 구한 각각의 루트 노드를 기반으로 중위 순회를 또 절반 씩 나눌 수 있음.
// 중위 순회 또는 후위 순회를 더이상 나눌 수 없을 때 까지 반복.
// 전위 순회는 루트 => 왼쪽 => 오른쪽으로 탐색하므로, 후위 순회에서 구한 루트 노드를 기록.

for (let i = 0; i < n; i++) {
  // 중위 순회에서 루트의 위치를 구하기 위한 기록
  position[inOrderList[i]] = i;
}

// 중위 순회 시작, 끝, 후위 순회 시작, 끝을 이용한 전위 순회 구하기
function getPreOrder(inStart, inEnd, postStart, postEnd) {
  // 더이상 구할 수 없으면 중지.
  if (inStart > inEnd || postStart > postEnd) return;
  // 이번 전위 순회에서 구한 루트 노드. (기록)
  let root = postOrderList[postEnd];
  answer.push(root);
  // 중위 순회에서 루트 노드의 위치.
  let rootIdx = position[root];
  // 중위 순회에서 구한 왼쪽 자식 트리의 크기. (오른쪽 자식 트리의 크기와 동일)
  let leftSize = rootIdx - inStart;
  // 루트 노드를 중심으로 중위 순회와 후위 순회를 절반씩 쪼개서 재탐색. (루트 노드는 탐색 범위에서 당연히 제외)
  // 루트 노드를 중심으로 중위 순회와 후위 순회를 쪼갠 자식 트리 중 왼쪽 자식 트리 탐색.
  getPreOrder(inStart, rootIdx - 1, postStart, postStart + leftSize - 1);
  // 루트 노드를 중심으로 중위 순회와 후위 순회를 쪼갠 자식 트리 중 오른쪽 자식 트리 탐색.
  getPreOrder(rootIdx + 1, inEnd, postStart + leftSize, postEnd - 1);
}

// 처음 중위 순회와 후위 순회는 모두 똑같은 크기.
// 재귀를 돌면서 각각 절반씩 쪼개어가면서 탐색.
getPreOrder(0, n - 1, 0, n - 1);

// 만약 아무런 순회도 할 수 없었다면 0 출력.
if (!answer.length) console.log(0);
// 방문했던 루트 노드 출력.
else console.log(answer.join(" "));
