module.exports = (app) =>{
    app.get('/subcategoria-apartamento', (req, res) =>{
        res.render('register-space/categories/adaptables/subcategories/apartment-subcategory')
    })
}