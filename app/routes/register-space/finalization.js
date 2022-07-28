module.exports = (app) => {
    app.get('/finalizacao-do-anuncio', (req, res) => {
        res.render('register-space/finalization')
    });
}