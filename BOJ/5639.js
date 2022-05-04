let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = [];

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value, null, null);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        let parent = current;
        if (value < current.val) {
          current = current.left;
          if (current === null) {
            parent.left = newNode;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = newNode;
            break;
          }
        }
      }
    }
  }
}

const binarySearchTree = new BinarySearchTree();

for (let x of input) {
  binarySearchTree.insert(x);
}

function postOrder(node) {
  if (node === null) return;
  postOrder(node.left);
  postOrder(node.right);
  answer.push(node.val);
}

postOrder(binarySearchTree.root);
console.log(answer.join("\n"));
