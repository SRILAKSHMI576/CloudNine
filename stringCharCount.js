// Each character of count in a string;

function StringCount(str, word) {
  let count = 0;
  const n = str.length - 1;
  for (let index = 0; index <= n; index++) {
    if (str[index] === word) {
      count++;
    }
  }
  return count;
}

function Counter(str) {
  const counterObj = {};
  for (let j = 0; j <= str.length - 1; j++) {
    const count = StringCount(str, str[j]);
    counterObj[str[j]] = count;
  }
  return counterObj;
}

console.log(Counter("HELLOWORLD"));
console.log(Counter("SRILAKSHMI"));
console.log(Counter("CLOUDNINE"));
