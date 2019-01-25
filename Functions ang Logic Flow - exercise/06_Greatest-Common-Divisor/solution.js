function greatestCD() {

    let firstNumber = document.getElementById('num1').value;
    let secondNumber = document.getElementById('num2').value;
    let result = document.getElementById('result');

    let a = Math.abs(firstNumber);
    let b = Math.abs(secondNumber);
    let divisor = DivisorFunc(a, b);

    result.textContent = divisor;

    function DivisorFunc(a, b) {

        if (b > a) {
            var temp = a;
            a = b;
            b = temp;
        }
        while (true) {
            if (b == 0) return a;
            a %= b;
            if (a == 0) return b;
            b %= a;
        }


    }

}