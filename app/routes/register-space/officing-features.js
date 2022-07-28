module.exports = (app) => {
    app.get('/caracteristicas-do-espaco', (req, res)=>{
        res.render('register-space/officing-features')
    });
}