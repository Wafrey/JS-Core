window.handler = window.handler || {};

handler.getLogin = function (ctx) {
    loadPartials(ctx)
        .then(function () {
            this.partial('/views/user/login.hbs');
        });
};

handler.postLogin = function (ctx) {
    let {username, password} = ctx.params;
    
    userService.login(username, password)
        .then(res => {
            userService.saveSession(res);
            notifications.showSuccess('Logged in successfully!');
            ctx.redirect('#/home');
        }).catch(err => notifications.showResponseError(err));
}

handler.logout = function (ctx) {
    userService.logout()
        .then(() => {
            notifications.showSuccess('Logged out successfully');
            sessionStorage.clear();
            ctx.redirect('#/home');
        })
}

handler.getRegister = function (ctx) {
    loadPartials(ctx)
        .then(function () {
            this.partial('/views/user/register.hbs');
        });
}

handler.postRegister = function (ctx) {
    let {username, password} = ctx.params;
    
    userService.register(username, password)
        .then(res => {
            userService.saveSession(res);
            notifications.showSuccess('Registered successfully!');
            ctx.redirect('#/home');
        }).catch(err => notifications.showResponseError(err));
}