function solve() {

    let number = document.querySelector('#exercise input[type="number"]');
    let output = document.getElementById('output');
    let num;

    function getCurrentNumber() {
        num = output.textContent || number.value;
        return num;
    }

    function attachEvents() {
        let chopBtn = document.querySelector('#operations button:nth-child(1)').addEventListener('click', chop);

        let diceBtn = document.querySelector('#operations button:nth-child(2)').addEventListener('click', dice);

        let spiceBtn = document.querySelector('#operations button:nth-child(3)').addEventListener('click', spice);

        let bakeBtn = document.querySelector('#operations button:nth-child(4)').addEventListener('click', bake);

        let filletBtn = document.querySelector('#operations button:nth-child(5)').addEventListener('click', fillet);
    }


    attachEvents();

    function chop() {

        getCurrentNumber();
        num /= 2;
        output.textContent = num;
    }

    function dice() {

        getCurrentNumber();
        num = Math.sqrt(num);
        output.textContent = num;
    }

    function spice() {

        getCurrentNumber();
        num = ++num;
        output.textContent = num;
    }

    function bake() {

        getCurrentNumber();
        num = num * 3;
        output.textContent = num;
    }

    function fillet() {

        getCurrentNumber();
        num *= 0.8;
        output.textContent = num;

    }


}