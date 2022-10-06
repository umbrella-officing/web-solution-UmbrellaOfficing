var bcrypt = require("bcryptjs");
const { application } = require("express");
var salt = bcrypt.genSaltSync(12);

module.exports.home = (application, req, res) => {
    if (req.session.autenticado) {
      autenticado = { name: req.session.usu_name_autenticado,
                      profession: req.session.profession};
    } else {
      autenticado = { autenticado: null};
    }
    res.render("pages/home/index",autenticado);
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
    nome_user: req.body.name,
    email_user: req.body.email,
    cpf_user: req.body.cpf,
    senha_user: bcrypt.hashSync(req.body.password, salt),
    dt_nasc_user:req.body.birth_date,
    celular_user:req.body.phone,
    profissao:req.body.profession,
    end_user:req.body.address
    };

  noticiasDao.registerUser(dadosForm, (error, result) => {
      if(error) {
        throw error
      }
      res.redirect('/');
  });
}

module.exports.login = (application, req, res) =>{
  res.render('teste/login')
}

module.exports.formLogin = (application, req, res) =>{
  
  var dadosForm = {
    userId: req.body.cpfEmail,
    senha_user: req.body.password
  };

  function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
            return str.join(" ");
    }

    const connection = application.config.dbConnection;
    const usersDao = new application.app.models.UsersDAO(connection);

    usersDao.login(dadosForm, (error, results) =>{

      if (error) throw error;
        var total = Object.keys(results).length;
        
        if (total == 1) {
          if (bcrypt.compareSync(dadosForm.senha_user,results[0].senha_user)) {
            var truncate_name = truncate(results[0].nome_user,2)
            var name_user = capital_letter(truncate_name)
            req.session.autenticado = true;
            req.session.usu_name_autenticado = name_user;
            req.session.profession = results[0].profissao
            return res.redirect("/");
          }
        }
    }
    )}