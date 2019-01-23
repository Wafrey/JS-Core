function solve() {

  let currentTemp = Number(document.getElementById('num1').value);
  let typeOfTemp = document.getElementById('type').value;
  let result = '';
  let convertedTemp = 0;
  let correctType = false;

  function convert(currentTemp, typeOfTemp) {

    if (typeOfTemp.toLowerCase() === 'fahrenheit') {

      convertedTemp = ((currentTemp - 32) * 5) / 9;
      correctType = true;
    } else if (typeOfTemp.toLowerCase() === 'celsius') {

      convertedTemp = ((currentTemp * 9) / 5) + 32;
      correctType = true;
    }

  }

  function print() {

    if (correctType) {
      result = Math.round(convertedTemp);
    } else {
      result = 'Error!';
    }
  }

  convert(currentTemp, typeOfTemp);
  print(currentTemp, typeOfTemp);

  document.getElementById('result').innerHTML = result;

}