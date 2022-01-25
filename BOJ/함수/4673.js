function NotSelfnumber(num) {
  let sum = num;

  while (true) {
    if (num == 0) {
      break;
    }
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
}

function selfnumber(num) {
  let selfnum = [];
  let result = [];

  for (let i = 1; i <= num; i++) {
    let index = NotSelfnumber(i);

    if (index <= num) {
      selfnum[index] = true;
    }
  }

  for (let i = 1; i <= num; i++) {
    if (!selfnum[i]) {
      result.push(i);
    }
  }
  console.log(result.join("\n"));
}

selfnumber(10000);
