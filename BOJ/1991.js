let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
let result = "";

const tree = {};
for (let i = 0; i < N; i++) {
  const [node, left, right] = input[i].split(" ");
  tree[node] = [left, right];
}

function preorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  result += node;
  preorder(left);
  preorder(right);
}

function inorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  inorder(left);
  result += node;
  inorder(right);
}

function postorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  postorder(left);
  postorder(right);
  result += node;
}

preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");

console.log(result);
