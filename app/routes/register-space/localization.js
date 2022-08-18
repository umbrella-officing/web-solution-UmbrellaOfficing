module.exports = (app) => {
    app.get('/localizacao', (req, res) =>{
        res.render('register-space/localization')
    })
}