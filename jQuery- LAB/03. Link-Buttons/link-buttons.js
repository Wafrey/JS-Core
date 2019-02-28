function attachEvents() {

$('a').on('click', isChecked)

function isChecked(){
    $('a').removeClass('selected');
    $(this).addClass('selected');
}
}