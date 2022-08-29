const blog = require('../script/teste/list-blog')

exports.characters = async (req,res) => {
        let {id} = req.params
        let item = await blog.find(post=>post.id == id)
        if(typeof item == 'undefined') {
           return res.send('error 404')
        }
        res.render('description/informations', {post:item})
}