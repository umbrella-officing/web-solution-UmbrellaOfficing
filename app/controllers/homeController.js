module.exports.index = (application, req, res) => {
    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.NoticiasDAO(connection);
    noticiasDao.get5UltimasNoticias((error, result) => {
      res.render("teste/teste",
      {
      sala:result,
       validacao:null,
       valores:""
      })
    });
  }


module.exports.registerUser = (application, req, res) =>{
  const connection = application.config.dbConnection;
  const noticiasDao = new application.app.models.NoticiasDAO(connection);

  var dadosForm = {
      name: req.body.nome_user
    };

  req.assert('nome_user', 'Mínimo 3 caracters')
  .matches(/(\d{3})[.]?(\d{3})[.]?(\d{3})[-]?(\d{2})/);

  const erros = req.validationErrors()

  if (erros) {
    noticiasDao.get5UltimasNoticias((error, result) => {
      res.render("teste/teste", 
      {
       sala:null,
       validacao:erros,
       "valores":req.body
      })
    })
    return;
}

  noticiasDao.registerUser(dadosForm, (error, result) => {
      res.redirect('/teste');
  });

    // var dadosForm = {
    //   name: req.body.nome_user,
    // };
    
    // connection.query(
    //   "INSERT INTO teste SET ?",
    //   dadosForm,
    //   function (error, results, fields) {
    //     if (error) throw error;
    //   }
    // );

    // res.redirect("/teste");
  


}