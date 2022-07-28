module.exports = (app) => {
    app.get('/favoritos', (req, res)=>{
        res.render('my-account/favorites')
    });
}