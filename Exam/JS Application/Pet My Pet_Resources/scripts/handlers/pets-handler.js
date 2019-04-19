window.handler = window.handler || {};

handler.getAllPets = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = userService.getUsername();
    let filter = ctx.params.category.slice(1);

    petsService.getAll(filter)
        .then(res => {
            ctx.otherPets = res;

            return ctx.loadPartials({
                header: '/views/common/header.hbs',
                footer: '/views/common/footer.hbs',
                otherPet: '/views/pets/otherPet.hbs'
            })
        })
        .then(function () {
            this.partial('/views/pets/index.hbs');
        });
};

handler.getOtherPets = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = userService.getUsername();
    
    let filter = ctx.params.category.slice(1);
    let userId = userService.getId();

    petsService.getAll(filter)
        .then(res => {
            // ctx.otherPets = res.filter(p => p._acl. != sessionStorage.getId() != userId);
            ctx.otherPets = res;

            return ctx.loadPartials({
                header: '/views/common/header.hbs',
                footer: '/views/common/footer.hbs',
                otherPet: '/views/pets/otherPet.hbs'
            })
        })
        .then(function () {
            this.partial('/views/pets/index.hbs');
        });
};

handler.getOtherPet = function (ctx) {
    petsService.getById(ctx.params.petId)
        .then(res => {
            Object.assign(ctx, res[0]);
            
            return loadPartials(ctx);
        })
        .then(function() {
            this.partial('/views/pets/otherPetDetails.hbs');
        });
};

handler.likeOtherPet = function(ctx) {
    petsService.getById(ctx.params.petId)
        .then(pet => petsService.likeOtherPet(ctx.params.petId, pet[0]))
        .then(() => history.back());
};

handler.getCreatePet = function (ctx) {
    loadPartials(ctx)
        .then(function () {
            this.partial('/views/pets/create.hbs');
        });
};

handler.postCreatePet = function (ctx) {
    petsService.create({...ctx.params, likes: 0})
        .then(res => {
            notifications.showSuccess('Created');
            ctx.redirect('#/dashboard');
        });
}

handler.getMyPets = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = userService.getUsername();
    let userId = sessionStorage.getItem('id');

    petsService.getMyPets(userId)
        .then(res => {
            ctx.myPets = res;

            return ctx.loadPartials({
                header: '/views/common/header.hbs',
                footer: '/views/common/footer.hbs',
                myPet: '/views/pets/myPet.hbs'
            })
        })
        .then(function () {
            this.partial('/views/pets/myPets.hbs');
        });
}

handler.getMyPet = function (ctx) {
    loadMyPet(ctx)
        .then(function() {
            this.partial('/views/pets/myPetDetails.hbs');
        })
        .catch(err => {
            notifications.showError(err.message);

            ctx.redirect('#/home');
        });
};

handler.getEditMyPet = function(ctx) {
    loadMyPet(ctx)
        .then(function() {
            this.partial('/views/pets/myPetEdit.hbs');
        })
        .catch(err => {
            notifications.showError(err.message);

            ctx.redirect('#/home');
        });
}

handler.postEditMyPet = function(ctx) {
    petsService.getById(ctx.params.petId)
        .then(pets => {
            if (pets[0]._acl.creator != sessionStorage.getItem('id')) {
                throw new Error('This pet is not YOURS!!!!');
            }

            return petsService.updateMyPet(ctx.params.petId, pets[0], ctx.params.description);
        })
        .then(function(data) {
            ctx.redirect(`#/pets/${ctx.params.petId}`);
        })
        .catch(err => {
            notifications.showError(err.message);

            ctx.redirect('#/home');
        });
}

handler.getDeleteMyPet = function(ctx) {
    loadMyPet(ctx)
        .then(function() {
            this.partial('/views/pets/myPetDelete.hbs');
        });
};

handler.postDeleteMyPet = function(ctx) {
    petsService.deleteMyPet(ctx.params.petId)
        .then(() => {
            notifications.showSuccess('Pet Deleted Successfully');
            ctx.redirect('#/pets');
        });
}

function loadMyPet(ctx) {
    return petsService.getById(ctx.params.petId)
        .then(pets => {
            if (pets[0]._acl.creator != sessionStorage.getItem('id')) {
                throw new Error('This pet is not YOURS!!!!');
            }

            Object.assign(ctx, pets[0]);

            return loadPartials(ctx);
        });
}
