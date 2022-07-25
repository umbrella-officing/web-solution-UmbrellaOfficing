module.exports = (app) => {
    app.get('/meu-perfil', (req, res)=>{
        res.render('my-account/my-profile')
    });
}