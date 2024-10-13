let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this._size++;

        return newNode;
    }

    getHead() {
        return this.head.value;
    }

    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this._size--;
    }

    getSize() {
        return this._size;
    }
}

const linkedList = new LinkedList();

for (let i = 1; i <= n; i++) {
    linkedList.add(i);
}

while (linkedList.getSize() > 1) {
    linkedList.removeHead();
    linkedList.add(linkedList.getHead());
    linkedList.removeHead();
}

console.log(linkedList.getHead());
