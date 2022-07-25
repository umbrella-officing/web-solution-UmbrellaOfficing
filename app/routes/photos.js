module.exports = (app) =>{
    app.get('/fotos', (req,res) =>{
        res.render('register-space/photos')
    });
}