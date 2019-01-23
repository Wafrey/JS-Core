function solve() {

  let uniqueChars = '';
  let givvenString = document.getElementById('string').value;

  function isCharHaveWhiteSpace(i) {

    if (givvenString[i] === " ") {
      uniqueChars += givvenString[i];
    }
  }

  function isCurCharUnique(i) {

    if (uniqueChars.indexOf(givvenString[i]) === -1) {
      uniqueChars += givvenString[i];
    }
  }

  function findUniqueCHar(givvenString) {

    for (let i = 0; i < givvenString.length; i++) {
      isCharHaveWhiteSpace(i);
      isCurCharUnique(i);
    }
  }


  findUniqueCHar(givvenString);
  document.getElementById('result').innerHTML = uniqueChars;
}