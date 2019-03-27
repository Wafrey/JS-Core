function attachEvents(){

    const baseUrl=`https://fir-d46d7.firebaseio.com/messages.json`;

    $('#submit').on('click', submitMessage);
    $('#refresh').on('click', reloadPage);

    function submitMessage(){

        let author=$('#author').val();
        let content=$('#content').val();
        let timestamp=Date.now();

        let message={

            author: author,
            content: content,
            timestamp: timestamp
        }

        $.ajax({

            method: 'POST',
            url: baseUrl,
            data: JSON.stringify(message),
            success: logRes
        })
    }

    function reloadPage(){

        $.ajax({

            method: 'GET',
            url: baseUrl,
            success: loadMessages
        })
    }

    function loadMessages(data){

        let allMessages='';
        
        for (let message of Object.values(data)){

            allMessages+=`${message.author}: ${message.content}\n`;
        }

        $('#messages').text(allMessages);
    }

    function logRes(message){

        console.log(message);
    }
}