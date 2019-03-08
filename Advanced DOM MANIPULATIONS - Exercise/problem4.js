function create(sentences) {

    for (let word of sentences) {
        
        let div=$('<div></div>');
        let paragraph=$('<p></p>');

        paragraph.text(word);
        paragraph.css('display', 'none')
        div.append(paragraph);

        div.on('click', function(){
            paragraph.css('display', 'block')
        })

        let contentDiv=$('#content');
        contentDiv.append(div);
    }
}