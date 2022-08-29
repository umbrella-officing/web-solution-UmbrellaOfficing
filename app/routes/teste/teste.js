const blog = require('../../public/script/teste/list-blog')

module.exports = (app) =>{
    app.get('/teste', (req,res) =>{
        res.render('teste/teste',{posts:blog})
    })
}