var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(12);


module.exports.index = (application, req, res) => {
    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.UsersDAO(connection);
    noticiasDao.get5UltimasNoticias((error, result) => {
      console.log(result)
      res.render("teste/register",
      {
       sala:result,
       validacao:null,
       valores:""
      })
    });
  }


module.exports.registerUser = (application, req, res) =>{

  const connection = application.config.dbConnection;
  const noticiasDao = new application.app.models.UsersDAO(connection);

  var dadosForm = {
    user_usuario: req.body.nomeusu_usu,
    senha_usuario: bcrypt.hashSync(req.body.senha_usu, salt),
    nome_usuario: req.body.nome_usu,
    email_usuario: req.body.email_usu,
    };

  req.assert('nome_usu', 'Mínimo 3 caracters').len(3, 100);

  const erros = req.validationErrors()

  if (erros) {
    noticiasDao.get5UltimasNoticias((error, result) => {
      res.render("teste/register", 
      {
       sala:null,
       validacao:erros,
       "valores":req.body
      })
    })
    return;
}

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
              return res.redirect("/login");
          }
        }
        res.redirect("/cadastro");
    }
    )}