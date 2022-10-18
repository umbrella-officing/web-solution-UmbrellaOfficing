var bcrypt = require("bcryptjs");
const { application } = require("express");
var salt = bcrypt.genSaltSync(12);

const multer = require('multer');

const armazenamentoMemoria = multer.memoryStorage()

const upload2 = multer({
  storage: armazenamentoMemoria,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
})

module.exports.home = (application, req, res) => {

  if (req.session.autenticado) {

    const connection = application.config.dbConnection;
    const userDao = new application.app.models.UsersDAO(connection);

    var id_user = Number(req.session.id_user)

    userDao.findUserInformations(id_user, (error, result) => {
      if (error) throw error

      autenticado = {
        name: req.session.usu_name_autenticado,
        profession: result[0].profissao,
        id_user: req.session.id_user,
        profile_picture: result[0].fotos_user
      };

      res.render("pages/home/index", autenticado);

    });

  } else {
    autenticado = { autenticado: null };
    res.render("pages/home/index", autenticado);
  }
} 

module.exports.sair = (application, req, res) => {
  req.session.destroy();
  res.redirect("/");
}

module.exports.registerUser = (application, req, res) => {

  const connection = application.config.dbConnection;
  const userDao = new application.app.models.UsersDAO(connection);

  var dadosForm = {
    nome_user: req.body.name,
    email_user: req.body.email,
    cpf_user: req.body.cpf,
    senha_user: bcrypt.hashSync(req.body.password, salt),
    dt_nasc_user: req.body.birth_date,
    celular_user: req.body.phone,
    profissao: req.body.profession,
    end_user: req.body.address
  };

  userDao.registerUser(dadosForm, (error, result) => {
    if (error) {
      throw error
    }
    res.redirect('/');
  });
}

module.exports.formLogin = (application, req, res) => {

  var dadosForm = {
    userId: req.body.cpfEmail,
    senha_user: req.body.password
  };

  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
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

  usersDao.login(dadosForm, (error, results) => {

    if (error) throw error;
    var total = Object.keys(results).length;

    if (total == 1) {
      if (bcrypt.compareSync(dadosForm.senha_user, results[0].senha_user)) {
        var truncate_name = truncate(results[0].nome_user, 2)
        var name_user = capital_letter(truncate_name)
        req.session.autenticado = true;
        req.session.usu_name_autenticado = name_user;
        req.session.id_user = results[0].cpf_user
        req.session.profession = results[0].profissao
        return res.redirect("/");
      }
    }
  }
  )
}

module.exports.uploadImagePerfil = (application, req, res) => {

  if (!req.file) {

    var dadosForm = {
      fotos_user: null,
      cpf_user: autenticado.id_user
    };

    const connection = application.config.dbConnection;
    const usersDao = new application.app.models.UsersDAO(connection);


    return usersDao.uploadImage(dadosForm, (error, results) => {
      if (error) throw error;
      res.redirect('/')
    })

  }

  else {

    let fileContent = req.file.buffer.toString('base64');

    var dadosForm = {
      fotos_user: fileContent,
      cpf_user: autenticado.id_user
    };


    const connection = application.config.dbConnection;
    const usersDao = new application.app.models.UsersDAO(connection);

    usersDao.uploadImage(dadosForm, (error, results) => {
      if (error) throw error;
      res.redirect('/')
    })
  }
}

module.exports.renderProfile = (application, req, res) => {  

  if (req.session.autenticado) {

    const connection = application.config.dbConnection;
    const userDao = new application.app.models.UsersDAO(connection);

    var id_user = Number(req.session.id_user)

    userDao.findUserInformations(id_user, (error, result) => {
      if (error) throw error

      autenticado = { 
        about_me: result[0].sobre_mim,
        profession_profile: result[0].perfil_profissional,
        id_user: req.session.id_user
      };

      res.render("pages/my-account/my-profile", autenticado);

    });

  } else {
    autenticado = { autenticado: null };
    res.render('pages/my-account/my-profile')
  }    
}

module.exports.registerProfile = (application, req, res) => {

  const connection = application.config.dbConnection;
  const userDao = new application.app.models.UsersDAO(connection);

  var dadosForm = {
    sobre_mim: req.body.about_me,
    perfil_profissional: req.body.profession_profile,
    id_user: req.session.id_user
  };

  console.log(dadosForm);

  userDao.registerProfile(dadosForm, (error, result) => {
    if (error) {
      throw error
    }
    console.log(result)
    res.redirect('/meu-perfil');
  });

  
}
