module.exports = (app) => {
    app.get('/notificacoes', (req, res)=>{
        res.render('my-account/notifications')
    });
}