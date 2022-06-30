let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }

    class SinglyLinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        size() {
            return this.length;
        }
        push(val) {
            let newNode = new Node(val);
            if (!this.head) {
                this.head = newNode;
                this.tail = this.head;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
            return this;
        }
        pop() {
            if (!this.head) return undefined;
            let current = this.head;
            let newTail = current;
            while (current.next) {
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;
        }
        shift() {
            if (!this.head) return undefined;
            let currentHead = this.head;
            this.head = currentHead.next;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return currentHead;
        }
        unshift(val) {
            let newNode = new Node(val);
            if (!this.head) {
                this.head = newNode;
                this.tail = this.head;
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++;
            return this;
        }
    }

    const strokes = {
        A: 3,
        B: 2,
        C: 1,
        D: 2,
        E: 3,
        F: 3,
        G: 3,
        H: 3,
        I: 1,
        J: 1,
        K: 3,
        L: 1,
        M: 3,
        N: 3,
        O: 1,
        P: 2,
        Q: 2,
        R: 2,
        S: 1,
        T: 2,
        U: 1,
        V: 1,
        W: 2,
        X: 2,
        Y: 2,
        Z: 1,
    };

    if (input.length === 1) {
        if (strokes[input[0]] % 2 === 0) return "You're the winner?";
        else return "I'm a winner!";
    }

    const singleLinkedList = new SinglyLinkedList();
    let lastStr1 = 0;
    let lastStr2 = 0;
    let result = 0;

    input = input.split("");
    if (input.length % 2 !== 0) {
        lastStr2 = strokes[input.pop()];
    }

    for (let x of input) {
        singleLinkedList.push(strokes[x]);
    }

    while (singleLinkedList.size() !== 1) {
        const a = singleLinkedList.shift().val;
        const b = singleLinkedList.shift().val;
        singleLinkedList.push(a + b > 10 ? (a + b) % 10 : a + b);
    }

    lastStr1 = singleLinkedList.pop().val;
    result = lastStr1 + lastStr2 > 10 ? (lastStr1 + lastStr2) % 10 : lastStr1 + lastStr2;

    if (result % 2 === 0 || result === 0) return "You're the winner?";
    return "I'm a winner!";
}

console.log(solution(input));
