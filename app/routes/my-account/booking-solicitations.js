module.exports = (app) => {
    app.get('/solicitacoes-reservas', (req, res)=>{
        res.render('my-account/booking-solicitations')
    });
}

