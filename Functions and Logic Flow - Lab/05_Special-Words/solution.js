function solve() {

  let firstNumber = Number(document.getElementById('firstNumber').value);
  let secondNumber = Number(document.getElementById('secondNumber').value);
  let firstString = document.getElementById('firstString').value;
  let secondString = document.getElementById('secondString').value;
  let thirdString = document.getElementById('thirdString').value;
  let result = document.getElementById('result');


  function checkCurNumber(i) {

    if (i % 5 === 0 && i % 3 === 0) {
      let paragraph = document.createElement('p');
      paragraph.innerHTML = `${i} ${firstString}-${secondString}-${thirdString}`;
      result.appendChild(paragraph);
    } else if (i % 3 === 0) {

      let paragraph = document.createElement('p');
      paragraph.innerHTML = `${i} ${secondString}`;
      result.appendChild(paragraph);

    }
    else if (i % 5 === 0) {

      let paragraph = document.createElement('p');
      paragraph.innerHTML = `${i} ${thirdString}`;
      result.appendChild(paragraph);
  
    }
    else{
      let paragraph = document.createElement('p');
      paragraph.innerHTML = `${i}`;
      result.appendChild(paragraph);
    }
  } 

 for(i=firstNumber; i<=secondNumber; i++){
   checkCurNumber(i);
 }
}





