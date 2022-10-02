var bcrypt = require("bcryptjs");
const { application } = require("express");
var salt = bcrypt.genSaltSync(12);

module.exports.central = (application, req, res) => {
    if (req.session.autenticado) {
      autenticado = { autenticado: req.session.usu_autenticado };
    } else {
      autenticado = { autenticado: null };
    }
    res.render("teste/central",autenticado);
}

module.exports.index = (application, req, res) => {
    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.UsersDAO(connection);
    noticiasDao.get5UltimasNoticias((error, result) => {
      res.render("teste/register",
      {
       sala:result,
       validacao:null,
       valores:""
      })
    });
  }

  module.exports.sair = (application, req, res) =>{
    req.session.destroy();
    res.redirect("/central");
  }

module.exports.registerUser = (application, req, res) =>{

  const connection = application.config.dbConnection;
  const noticiasDao = new application.app.models.UsersDAO(connection);

  var dadosForm = {
    user_usuario: req.body.user_name,
    email_usuario: req.body.email,
    senha_usuario: bcrypt.hashSync(req.body.password, salt)
    // nome_usuario: req.body.nome_usu,
    // data_escolhida:req.body.data_escolhida
    };

//   req.assert('nome_usu', 'Mínimo 3 caracters').len(3, 100);
//   req.assert('data_escolhida', 'Formato da data está inadequado').isDate({
//     format: 'YYYY-MM-DD'
// });

//   const erros = req.validationErrors()

//   if (erros) {
//     noticiasDao.get5UltimasNoticias((error, result) => {
//       res.render("teste/register", 
//       {
//        sala:null,
//        validacao:erros,
//        "valores":req.body
//       })
//     })
//     return;
// }

  noticiasDao.registerUser(dadosForm, (error, result) => {
      res.redirect('/cadastro');
      if(error) throw error
      
  });
}

module.exports.login = (application, req, res) =>{
  res.render('teste/login')
}

module.exports.formLogin = (application, req, res) =>{
  
  var dadosForm = {
    user_usuario: req.body.nome_usu,
    senha_usuario: req.body.senha_usu,
  };

    const connection = application.config.dbConnection;
    const usersDao = new application.app.models.UsersDAO(connection);

    usersDao.login(dadosForm, (error, results) =>{

      if (error) throw error;
        var total = Object.keys(results).length;
        
        if (total == 1) {
          if (bcrypt.compareSync(dadosForm.senha_usuario,results[0].senha_usuario)) {
            req.session.autenticado = true;
            req.session.usu_autenticado = results[0].nome_usuario;
            console.log(results[0].nome_usuario)
            return res.redirect("/central");
          }
        }
        res.redirect("/cadastro");
    }
    )}