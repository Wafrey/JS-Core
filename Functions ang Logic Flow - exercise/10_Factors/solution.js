function solve() {
 
   let button=document.querySelector('#exercise input button');
 
   let number=Number(document.getElementById('num').value);
 
   let result=document.getElementById('result');
 
let factorNumbers=factorize(number);
 
 
result.textContent=factorNumbers.join(' ');
 
 
function factorize(number){
 
   var factors=[], i;
   for(i=1; i<=number; i++){
      if(number%i==0){
         factors.push(i);
      }
   }
   return factors;
}  
}
