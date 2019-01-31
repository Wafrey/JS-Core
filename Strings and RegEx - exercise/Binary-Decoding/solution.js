function solve() {

  let inputElement = document.getElementById('str');
  let outputElement = document.getElementById('result');

  let oneSum = findOneSum(inputElement.value);
  let end = inputElement.value.length - oneSum;

  let result = inputElement.value.slice(oneSum, end);

  let parts = result.split(/([\d]{8})/)
    .filter((x) => x)
    .map((x) => binaryToString(x))
    .filter((c) => /[A-Za-z ]+/g.test(c))
    .join('');


  outputElement.textContent = parts;

  function findOneSum(value) {

    let result = value;

    while (result.length > 1) {
      let temp = result
        .split('')
        .reduce((a, b) => Number(a) + Number(b))
        .toString();

      result = temp;
    }
    return +result;
  }

  function binaryToString(element) {

    let decimal = parseInt(element, 2);
    return String.fromCharCode(decimal);

  }
}