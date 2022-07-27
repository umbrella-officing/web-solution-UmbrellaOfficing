module.exports = (app) => {
    app.get('/adicionar-sala', (req, res)=>{
        res.render('register-space/add-room')
    });
}

