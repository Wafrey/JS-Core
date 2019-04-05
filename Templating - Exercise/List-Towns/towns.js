function attachEvents(){

    $('#btnLoadTowns').on('click', getTowns)

    function getTowns (){

        let towns = $('#towns').val().split(', ');
        
        let template = $('#towns-template').html();
        let compiledTemplate = Handlebars.compile(template);

        let context={

            towns: towns          
        }

        $('#root').html(compiledTemplate(context));

        // get template
        // compile template
        // create context
        // add to html
    }  
}