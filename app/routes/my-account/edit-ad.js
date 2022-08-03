module.exports = (app) => {
    app.get('/editar-anuncio', (req, res)=>{
        res.render('my-account/edit-ad')
    });
}

