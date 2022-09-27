var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(12);

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


module.exports.registerUser = (application, req, res) =>{

  const connection = application.config.dbConnection;
  const noticiasDao = new application.app.models.UsersDAO(connection);

  var dadosForm = {
      name: req.body.name,
      email_user:req.body.email_user,
      senha:bcrypt.hashSync(req.body.senha, salt)
    };

  req.assert('nome_user', 'Mínimo 3 caracters')

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
  
    const dadosForm = req.body
    const connection = application.config.dbConnection;
    const usersDao = new application.app.models.UsersDAO(connection);

    usersDao.login(dadosForm,(error, result)=>{
      if(error) throw error
      var total = Object.keys(result).length;
        
      if (total == 1) {
        if (bcrypt.compareSync(dadosForm.senha,result[0].senha)) {
            console.log(result)
        }
        
      }
      res.redirect("/");
    })
    

    res.redirect('/login')
}