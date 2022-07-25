module.exports = (app) => {
    app.get('/dados-pessoais', (req, res)=>{
        res.render('my-account/personal-date')
    });
}