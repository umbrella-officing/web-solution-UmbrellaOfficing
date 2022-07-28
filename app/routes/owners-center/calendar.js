module.exports = (app) => {
    app.get('/calendario', (req, res)=>{
        res.render('owners-center/calendar')
    });
}

