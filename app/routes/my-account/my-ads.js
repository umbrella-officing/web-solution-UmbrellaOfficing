module.exports = (app) => {
    app.get('/meus-anuncios', (req, res)=>{
        res.render('my-account/my-ads')
    });
}

