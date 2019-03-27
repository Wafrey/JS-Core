function attachEvents() {

    const baseUrl = `https://baas.kinvey.com/`;
    const appKey = `kid_rkk_6ROOE/`;
    const appdata='messenger';
    const authToken = `b8c8e55a-83c0-497e-8955-62a668e95a29.FEZVkUwBlD2D1iao27cbqZOTs2K65NxsR2qS7+ucPI0=`;
    const authHeaders = {

        "Authorization": `Kinvey ${authToken}`,
        "Content-Type": 'application/json'
    }

    $('#submit').on('click', submitMessage);
    $('#refresh').on('click', reloadPage);

    function submitMessage() {

        let author = $('#author').val();
        let content = $('#content').val();
        let timestamp = Date.now();
        let message = {

            author: author,
            content: content,
            timestamp: timestamp
        }

        $.ajax({

            method: 'POST',
            url: baseUrl + "appdata/" + appKey + appdata,
            data: JSON.stringify(message),
            headers: authHeaders,
            
        })
    }

    function reloadPage() {

        $.ajax({

            method: 'GET',
            url: baseUrl + "appdata/" + appKey + appdata,
            success: loadMessages,
            headers: authHeaders
        })

    }

    function loadMessages(data) {

        let allMessages = '';

        for (let message of Object.values(data)) {
            allMessages += `${message.author}: ${message.content}\n`;
        }

        $('#messages').text(allMessages);
    }

}