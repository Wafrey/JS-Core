function solve() {


  let firstGivvenNumber = Number(document.getElementById('num1').value);
  let secondGivvenNumber = Number(document.getElementById('num2').value);
  let resultOfMult = document.getElementById('result');


  function isSecondBigger(firstGivvenNumber, secondGivvenNumber) {

    if (firstGivvenNumber > secondGivvenNumber) {

      document.getElementById('result').innerHTML = "Try with other numbers.";
    }
  }

  function multiplyNumber(firstGivvenNumber, secondGivvenNumber) {

    for (i = firstGivvenNumber; i <= secondGivvenNumber; i++) {
      let result = i * secondGivvenNumber;
      let paragraph = document.createElement('p');
      paragraph.innerHTML = `${i} * ${secondGivvenNumber} = ${result}`;

      resultOfMult.appendChild(paragraph);
    }
  }


  resultOfMult.innerHTML = '';

  isSecondBigger(firstGivvenNumber, secondGivvenNumber);
  multiplyNumber(firstGivvenNumber, secondGivvenNumber);
}