let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let K = Number(input[0]);
input = input
    .slice(1)
    .map((v) => v.split(" ").map(Number))
    .reverse();

while (K--) {
    let [V, E] = input.pop();
    let graph = Array.from({ length: V + 1 }, () => []);
    let ch = Array.from({ length: V + 1 }, () => 0);
    let cnt = E;

    while (cnt--) {
        const [a, b] = input.pop();
        graph[a].push(b);
        graph[b].push(a);
    }

    function BFS(v) {
        const queue = [];
        queue.push(v);

        let idx = 0;
        while (idx !== queue.length) {
            const cur = queue[idx];

            for (let i = 0; i < graph[cur].length; i++) {
                const next = graph[cur][i];

                if (ch[next] === 0) {
                    if (ch[cur] === 1) ch[next] = 2;
                    else ch[next] = 1;
                    queue.push(next);
                } else if (ch[cur] === ch[next]) {
                    return;
                }
            }
            idx++;
        }
    }

    for (let i = 1; i <= V; i++) {
        if (ch[i] === 0) {
            ch[i] = 1;
            BFS(i);
        }
    }

    let flag = false;
    for (let i = 1; i <= V; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (ch[i] === ch[graph[i][j]]) {
                console.log("NO");
                flag = true;
                break;
            }
        }
        if (flag) break;
    }
    if (!flag) console.log("YES");
}
