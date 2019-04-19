function loadPartials(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = userService.getUsername();
    
    return ctx.loadPartials({
        header: '/views/common/header.hbs',
        footer: '/views/common/footer.hbs'
    });
}
