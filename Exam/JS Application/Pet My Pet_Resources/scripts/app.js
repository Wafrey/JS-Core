$(() => {

    const app = Sammy('#root', function () {

        this.use('Handlebars', 'hbs');

        this.get('#/home', handler.getHome);
        this.get('#/login', handler.getLogin);
        this.get('#/register', handler.getRegister);
        this.get('#/logout', handler.logout);
        this.get('#/dashboard(/:category)?', handler.getOtherPets);
        this.get('#/otherpets/:petId', handler.getOtherPet);
        this.get('#/otherpets/:petId/like', handler.likeOtherPet);
        this.get('#/pets/create', handler.getCreatePet);
        this.get('#/pets', handler.getMyPets);
        this.get('#/pets/:petId', handler.getMyPet);
        this.get('#/pets/:petId/edit', handler.getEditMyPet);
        this.get('#/pets/:petId/delete', handler.getDeleteMyPet);

        this.post('#/register', handler.postRegister);
        this.post('#/login', handler.postLogin);
        this.post('#/pets/create', handler.postCreatePet);
        this.post('#/pets/:petId/edit', handler.postEditMyPet);
        this.post('#/pets/:petId/delete', handler.postDeleteMyPet);
    });

    app.run('#/home');
});