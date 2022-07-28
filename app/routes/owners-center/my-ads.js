module.exports = (app) => {
    app.get('/meus-anuncios', (req, res)=>{
        res.render('owners-center/my-ads')
    });
}

