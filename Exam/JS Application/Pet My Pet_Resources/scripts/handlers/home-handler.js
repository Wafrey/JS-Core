window.handler = window.handler || {};

handler.getHome = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = userService.getUsername();
    
    ctx.loadPartials({
        header: '/views/common/header.hbs',
        footer: '/views/common/footer.hbs'
    }).then(function() {
        this.partial('/views/home/index.hbs');
    });
};
