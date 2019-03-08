function notify(message) {

    let $notification = $('#notification');
    $notification.text(message);
    $notification.css('display', 'block');

    setTimeout(function () {
        $notification.css('display', 'none');
    }, 2000);
}