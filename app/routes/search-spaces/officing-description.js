module.exports = (app) => {
    app.get('/descricao-do-officing',(req,res)=>{
        res.render('search-spaces/officing-description')
    });

}