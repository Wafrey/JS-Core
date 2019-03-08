function toggle() {
    let btn=$('.button');
    let divElement=$('#extra');

    if (btn.text()==='More') {
        btn.text('Less');
        divElement.css('display', 'block');
    }else if(btn.text()==='Less'){
        btn.text('More');
        divElement.css('display', 'none');
    }
}