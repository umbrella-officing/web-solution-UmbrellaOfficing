module.exports = (app) =>{
    app.get('/teste2', (req,res) =>{
        res.render('teste2/teste2')
    })
}