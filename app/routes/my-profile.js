module.exports = (app) => {
    app.get('/meu_perfil', (req, res)=>{
        res.render('my-account/my-profile')
    });
}