module.exports = (app) =>{
    app.get('/tipo-de-ambiente', (req, res)=>{
        res.render('register-space/type-of-environment')
    });
}