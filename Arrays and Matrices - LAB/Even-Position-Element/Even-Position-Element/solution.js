function solve() {

  let inputText = document.getElementById('arr').value;
  let inputArr = JSON.parse(inputText);
  let evenNumber = [];

  for (let i = 0; i < inputArr.length; i++) {

    let element = inputArr[i];

    if (i % 2 == 0) {
      evenNumber.push(element)
    }
  }

  let resultText = evenNumber.join(' x ');
  let result = document.getElementById('result');

  result.textContent = resultText;

}