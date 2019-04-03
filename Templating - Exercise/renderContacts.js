function showDetails(id){

    $(`#${id}`).toggle();

}

$(async () => {

    try {

        const contactListHTML = await $.get('./contact-list.hbs');
        const contactInfoHTML = await $.get('./contact-info.hbs');

        Handlebars.registerPartial('contactInfo', contactInfoHTML);
        const template = Handlebars.compile(contactListHTML);
        const renderedHTML=template({contacts});
        $('body').append(renderedHTML);


    } catch (err) {
        console.log(err);
    }


})