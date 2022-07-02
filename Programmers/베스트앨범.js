function solution(genres, plays) {
    let answer = [],
        tmp = new Map();

    for (let i = 0; i < genres.length; i++) {
        if (tmp.has(genres[i])) tmp.set(genres[i], tmp.get(genres[i]) + plays[i]);
        else tmp.set(genres[i], plays[i]);
    }

    let sH = new Map([...tmp.entries()].sort((a, b) => b[1] - a[1]));

    for (let [key, val] of sH) {
        let arr = {};
        for (let i = 0; i < genres.length; i++) {
            if (genres[i] === key) arr[i] = plays[i];
        }
        arr = Object.entries(arr).sort((a, b) => b[1] - a[1]);
        if (arr.length === 1) answer.push(Number(arr[0][0]));
        else {
            answer.push(Number(arr[0][0]));
            answer.push(Number(arr[1][0]));
        }
    }
    return answer;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));
console.log(
    solution(["classic", "pop", "classic", "classic", "pop", "Rock", "Rock"], [500, 600, 150, 800, 2500, 1000, 1000])
);
console.log(solution(["classic"], [500]));
