let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = Number(input[0]);
    const orders = input.slice(1).map((v) => v.split(" "));
    const answer = [];

    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class Queue {
        constructor() {
            this.head = null;
            this.tail = null;
            this.size = 0;
        }

        push(val) {
            var newNode = new Node(val);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            return ++this.size;
        }

        pop() {
            if (!this.head) return -1;

            var temp = this.head;
            if (this.head === this.tail) {
                this.tail = null;
            }
            this.head = this.head.next;
            this.size--;
            return temp.value;
        }

        front() {
            return this.size > 0 ? this.head.value : -1;
        }

        back() {
            return this.size > 0 ? this.tail.value : -1;
        }

        empty() {
            return this.size > 0 ? 0 : 1;
        }
    }

    const queue = new Queue();

    for (let order of orders) {
        const type = order[0];

        if (type === "push") {
            queue.push(order[1]);
        } else if (type === "pop") {
            answer.push(queue.pop());
        } else if (type === "size") {
            answer.push(queue.size);
        } else if (type === "empty") {
            answer.push(queue.empty());
        } else if (type === "front") {
            answer.push(queue.front());
        } else if (type === "back") {
            answer.push(queue.back());
        }
    }

    return answer.join("\n");
}

console.log(solution(input));
