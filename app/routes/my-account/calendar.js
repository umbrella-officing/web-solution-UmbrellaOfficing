module.exports = (app) => {
    app.get('/calendario', (req, res)=>{
        res.render('my-account/calendar')
    });
}

