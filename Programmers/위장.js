function solution(clothes) {
    let answer = 1;
    let collection = new Map();
    for (let clothe of clothes) {
        if (collection.has(clothe[1])) {
            collection.set(clothe[1], collection.get(clothe[1]) + 1);
        } else {
            collection.set(clothe[1], 2);
        }
    }
    for (let [key, val] of collection) {
        answer *= val;
    }
    answer -= 1;
    return answer;
}

console.log(
    solution([
        ["yellowhat", "headgear"],
        ["bluesunglasses", "eyewear"],
        ["green_turban", "headgear"],
    ])
);
console.log(
    solution([
        ["crowmask", "face"],
        ["bluesunglasses", "face"],
        ["smoky_makeup", "face"],
    ])
);
