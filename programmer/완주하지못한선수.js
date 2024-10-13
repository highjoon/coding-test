function solution(participant, completion) {
    let answer = "";
    let hash = new Map();

    for (let name of participant) {
        if (hash.has(name)) {
            hash.set(name, hash.get(name) + 1);
        } else {
            hash.set(name, 1);
        }
    }

    for (let name of completion) {
        if (hash.has(name)) {
            hash.set(name, hash.get(name) - 1);
        }
        if (hash.get(name) === 0) {
            hash.delete(name);
        }
    }

    for (let [key, val] of hash) {
        if (val > 0) {
            answer = key;
            break;
        }
    }

    return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
