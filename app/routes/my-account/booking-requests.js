module.exports = (app) => {
    app.get('/solicitacoes-de-reservas', (req, res)=>{
        res.render('my-account/booking-requests')
    });
}

