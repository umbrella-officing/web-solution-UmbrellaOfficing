module.exports = (app) =>{
    app.get('/categorias-de-espacos-adaptaveis', (req, res) => {
        res.render('register-space/categories/adaptables/adaptables-categories');
    })
}