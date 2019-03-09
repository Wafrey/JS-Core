function addSticker() {

    let $title = $('.title');
    let $text = $('.content');

    if ($title.val() && $text.val()) {

        createNode();
        reset();
    }

    function createNode() {

        let $li=$('<li></li>');
        $li.addClass('note-content');

        let $button=$('<a>x</a>');
        $button.addClass('button');

        $button.on('click', () => $li.remove())

        let $h2=$(`<h2>${$title.val()}</h2>`);
        let $hr=$('<hr>');

        let $p=$(`<p>${$text.val()}</p>`);

        $li.append($button).append($h2).append($hr).append($p);

        let $ul=$('#sticker-list');
        let $div=$('.stickerBoard');

        $ul.append($li);
        $div.append($ul);
       
        }


    function reset() {

        $title.val('');
        $text.val('');

    }


}