// const listController = require('../../public/controllers/list-controller')
//  app.get('/teste/:id',listController.characters)
const blog = require('../../public/script/teste/list-blog')
module.exports = (app) =>{
    app.get('/teste/gh', (req,res) =>{
        res.render('description/informations')
    })
}