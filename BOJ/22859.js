let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  function getTitle(str) {
    let isTitle = false;
    let result = "";
    for (let x of str) {
      if (x !== '"' && isTitle) result += x;
      if (x === '"' && !isTitle) {
        isTitle = true;
      } else if (x === '"' && isTitle) {
        isTitle = false;
        break;
      }
    }
    return result;
  }

  function deleteTags(p) {
    let str = "";
    let prev = "";
    let isTag = false;
    for (let i = 0; i < p.length; i++) {
      if (p[i] === "<" && !isTag) {
        isTag = true;
        continue;
      } else if (p[i] === ">" && isTag) {
        isTag = false;
        continue;
      } else if (!isTag) {
        if (prev === " " && prev === p[i]) continue;
        str += p[i];
        prev = p[i];
      }
    }
    return str;
  }

  const answer = [];
  const divTags = input.match(/<div(.*?)>(.*?)<\/div>/g);

  for (let div of divTags) {
    const pTags = div.split(/<p(.*?)>(.*?)<\/p>/g);
    const title = getTitle(pTags[0]);

    const result = [];
    for (let i = 1; i < pTags.length - 1; i++) {
      let p = pTags[i].trim();
      if (!p.length) continue;
      p = deleteTags(p);
      result.push(p);
    }
    answer.push([`title : ${title}`, result.join("\n")]);
  }

  return answer.map((v) => v.join("\n")).join("\n");
}

console.log(solution(input));
