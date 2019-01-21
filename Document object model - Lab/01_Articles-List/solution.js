function solve() {


    let TitleElement = document.getElementById('createTitle');
    let ContentElement = document.getElementById('createContent');

    let TitleValue = TitleElement.value;
    let ContentValue = ContentElement.value;


    if (TitleElement && ContentElement) {

        let createTitle = document.createElement('h3');
        createTitle.textContent = TitleValue;

        let createContent = document.createElement('p');
        createContent.textContent = ContentValue;

        let createArticle = document.createElement('article');

        createArticle.appendChild(createTitle);
        createArticle.appendChild(createContent);


        let motherArticle = document.getElementById('articles');

        motherArticle.appendChild(createArticle);



        TitleElement.value = '';
        ContentElement.value = '';

    }
}