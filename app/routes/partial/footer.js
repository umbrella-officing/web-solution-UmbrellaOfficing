module.exports = (app) => {
    app.get('/',(req,res)=>{
        res.render('partial/footer',{incluir:'footer'});
    });

}