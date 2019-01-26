function solve() {

let arr=document.getElementById('arr').value;
let arrText=JSON.parse(arr);


let result=[];

for (let i = 0; i < arrText.length; i++) {
  
  let product=arrText[i]*arrText.length;
  result.push(`${i} -> ${product}`);  
}

let resultEl=document.getElementById('result');

for (let i = 0; i < result.length; i++) {
  
  let paragraph=document.createElement('p');

  paragraph.textContent=result[i];

  resultEl.appendChild(paragraph);

  
}


}