module.exports = (app) => {
    app.get('/subcategoria-casa', (req, res)=> {
        res.render('register-space/categories/adaptables/subcategories/house-subcategory')
    })
}