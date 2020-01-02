//Min no of steps to make input string a pallidrome

function StringCountPallindrome(str) {
  const upperCaseStr = str.toUpperCase();
  sum = 0;
  const n = upperCaseStr.length;
  for (let index = 0; index <= n / 2; index++) {
    let firstElement = upperCaseStr[index].charCodeAt(0);
    let lastElement = upperCaseStr[
      upperCaseStr.length - (index + 1)
    ].charCodeAt(0);

    result = firstElement - lastElement;

    const finalValue = Math.abs(result);
    sum = sum + finalValue;
  }
  return sum;
}

console.log(StringCountPallindrome("YZWYXYZ"));
console.log(StringCountPallindrome("HELLOWORLD"));
console.log(StringCountPallindrome("SRILAKSHMI"));
