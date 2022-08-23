module.exports = (app) => {
    app.get('/controle-de-anuncios', (req, res)=>{
        res.render('admin/ads-control')
    });
}

