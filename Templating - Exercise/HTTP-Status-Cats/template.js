$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        
        let catsTemplate = await $.ajax({

            url: './catsTemplate.html'
        });

        let compileTemplate=Handlebars.compile(catsTemplate);

        let context = {

            cats: window.cats
        };

        $('#allCats').html(compileTemplate(context));
    }

})

function showInfo(id){

    $(`#${id}`).toggle();
}