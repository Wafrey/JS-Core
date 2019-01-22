function solve() {

    //0 is my , 1 is pesho
    let buttons = Array.from(document.getElementsByTagName('button'));

    let inputFields = Array.from(document.getElementsByTagName('input'));

    buttons.forEach((btn) => {

        btn.addEventListener('click', function (event) {

            let divElement = document.createElement('div');
            let spanElement = document.createElement('span');
            let pEelemnt = document.createElement('p');

            let senderBtn = event.target.name;

            if (senderBtn === "myBtn") {

                spanElement.textContent = 'Me';

                pEelemnt.textContent = document.getElementById('myChatBox').value;

            } else if (senderBtn === "peshoBtn") {

                spanElement.textContent = 'Pesho';
                pEelemnt.textContent = document.getElementById('peshoChatBox').value;

            }

            divElement.appendChild(spanElement);
            divElement.appendChild(pEelemnt);

            if (senderBtn === 'myBtn') {
                divElement.style.textAlign = 'left';
            } else if (senderBtn === 'peshoBtn') {
                divElement.style.textAlign = 'right';
            }
            document.getElementById('chatChronology').appendChild(divElement);

            inputFields[0].value = "";
            inputFields[1].value = "";

        })
    })
}