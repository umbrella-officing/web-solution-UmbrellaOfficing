module.exports = (app) => {
    app.get('/controle-de-usuarios', (req, res)=>{
        res.render('admin/users-control')
    });
}

