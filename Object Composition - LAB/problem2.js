function solve(){

return (function(){

    let firstNum=0;
    let secondNum=1;

    return function(){
        let result = secondNum;
        let sum=firstNum+secondNum;
        firstNum=secondNum;
        secondNum=sum;

        return result;
    }

})();



console.log(fib()); // 0
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2


}