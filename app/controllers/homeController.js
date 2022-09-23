var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(12);

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

  // var dadosForm = {
  //     name: req.body.nome_user,
  //     senha: req.body.senha
  //   };

  var senha = bcrypt.hashSync(req.body.senha, salt)

  var dadosForm = {
      name: req.body.name,
      senha:senha
    };
  

  // var dadosForm =  req.body

  req.assert('nome_user', 'Mínimo 3 caracters')

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

// var result = connection.query(
//   "INSERT INTO teste SET ?",
//   dadosForm,
//   function (error, results, fields) {
//     if (error) throw error;
//     res.redirect("/teste");
//   }
// );

  noticiasDao.registerUser(dadosForm, (error, result) => {
      res.redirect('/teste');
      if(error){
        throw error
      }
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