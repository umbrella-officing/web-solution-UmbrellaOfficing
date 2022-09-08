module.exports = (app) => {
    app.get('/minhas-reservas', (req, res)=>{
        res.render('my-account/my-reservations')
    });
}