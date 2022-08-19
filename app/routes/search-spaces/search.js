module.exports = (app) => {
    app.get('/encontrar-espacos',(req,res)=>{
        res.render('search-spaces/search')
    });

}