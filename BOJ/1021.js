let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);
let answer = 0;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
            newNode.prev = newNode;
            newNode.next = newNode;
        } else {
            newNode.prev = this.tail;
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head.prev = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.length) return undefined;

        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
            oldHead.next = null;
            oldHead.prev = null;
        }
        this.length--;
        return oldHead;
    }

    rotateToLeft(n = 1) {
        while (n > 0) {
            if (this.length > 1) {
                this.tail = this.head;
                this.head = this.head.next;
            }
            n--;
        }
        return this;
    }

    rotateToRight(n = 1) {
        while (n > 0) {
            if (this.length > 1) {
                this.head = this.tail;
                this.tail = this.tail.prev;
            }
            n--;
        }
        return this;
    }

    extract(value) {
        let current = this.head;
        let countLeft = 0;
        let countRight = 0;

        while (current.val !== value) {
            current = current.next;
            countLeft++;
        }

        current = this.head;

        while (current.val !== value) {
            current = current.prev;
            countRight++;
        }

        if (countLeft < countRight) {
            this.rotateToLeft(countLeft);
            this.shift();
            return countLeft;
        } else {
            this.rotateToRight(countRight);
            this.shift();
            return countRight;
        }
    }
}

let linkedList = new DoublyLinkedList();

for (let i = 1; i <= N; i++) {
    linkedList.push(i);
}

for (let num of nums) {
    answer += linkedList.extract(num);
}

console.log(answer);
