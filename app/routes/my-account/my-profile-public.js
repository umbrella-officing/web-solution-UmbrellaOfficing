module.exports = (app) => {
    app.get('/perfil-publico', (req, res)=>{
        res.render('pages/my-account/my-profile-public')
    });
}