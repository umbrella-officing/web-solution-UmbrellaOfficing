module.exports = (app) => {
    app.get('/perfil', (req, res)=>{
        res.render('my-account/my-profile-public')
    });
}