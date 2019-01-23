function solve() {

  let givvenString = document.getElementById('string').value;
  let givvenCharacter = document.getElementById('character').value;

  let count = 0;
  let result = '';

  function findCharacterCount(givvenString, givvenCharacter) {

    for (i = 0; i < givvenString.length; i++) {

      if (givvenString[i] === givvenCharacter) {
        count++;
      }
    }

  }

  function isEvenOrOdd(givvenString, givvenCharacter) {

    if (count % 2 === 0) {
      result = `Count of ${givvenCharacter} is even.`;
    } else {
      result = `Count of ${givvenCharacter} is odd.`;

    }

  }

  findCharacterCount(givvenString, givvenCharacter);
  isEvenOrOdd(givvenString, givvenCharacter);

  document.getElementById('result').innerHTML = result;
}
