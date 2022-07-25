module.exports = (app) => {
    app.get('/reservas', (req, res)=>{
        res.render('my-account/my-reservations')
    });
}