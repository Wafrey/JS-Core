function solve(){
 
let takeInput=document.getElementById('input');
let takeOutput=document.getElementById('output');

let sentenceArr=takeInput.textContent.split('.');

console.log(sentenceArr);

for (let index = 0; index < sentenceArr.length; index+=3) {
  
let paragraph=document.createElement('p');

paragraph.textContent=sentenceArr[index];





}



}