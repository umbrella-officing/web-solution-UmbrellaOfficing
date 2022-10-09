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
} })

module.exports.home = (application, req, res) => {
    if (req.session.autenticado) {
      autenticado = { name: req.session.usu_name_autenticado,
                      id_user:req.session.id_user,
                      profession: req.session.profession};
    } else {
      autenticado = { autenticado: null};
    }
    res.render("pages/home/index",autenticado);
}

// module.exports.index = (application, req, res) => {
//     const connection = application.config.dbConnection;
//     const userDao = new application.app.models.UsersDAO(connection);
//     userDao.get5UltimasNoticias((error, result) => {
//       res.render("teste/register",
//       {
//        sala:result,
//        validacao:null,
//        valores:""
//       })
//     });
//   }

  module.exports.sair = (application, req, res) =>{
    req.session.destroy();
    res.redirect("/central");
  }

module.exports.registerUser = (application, req, res) =>{

  const connection = application.config.dbConnection;
  const userDao = new application.app.models.UsersDAO(connection);

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

  userDao.registerUser(dadosForm, (error, result) => {
      if(error) {
        throw error
      }
      res.redirect('/');
  });
}

/*
  var storage = multer.diskStorage({
        filename: (req, file, callBack) => {
          callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) //renomeando o arquivo para evitar duplicidade de nomes
        }
      })

      var upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
          if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
          } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
          }
        }
      });

      const armazenamentoMemoria = multer.memoryStorage()
      //adiciona este espaço ao método de upload
      const upload2 = multer({ 
        storage: armazenamentoMemoria,
        fileFilter: (req, file, cb) => {
          if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
          } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
          }
      } })

      upload2.single('ImagemPerfil')  
      
        if (!req.file) {
           return console.log("Falha no carregamento");
        }

          let fileContent = req.file.buffer.toString('base64');

          var dadosForm = {
            fotos_user:fileContent,
          };
*/

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
            req.session.id_user = results[0].cpf_user
            req.session.profession = results[0].profissao
            return res.redirect("/");
          }
        }
    }
    
    )}


    module.exports.uploadImagePerfil = (application, req, res) =>{
  
      
      if (!req.file) {
        console.log("Falha no carregamento");
      } else {
        console.log('teste2')
      }
         

  
        // if (!req.file) {
        //    return console.log("Falha no carregamento");
        // }
          
        //   var dadosForm = {
        //     cpf_user:autenticado.id_user,
        //     fotos_user:fileContent,
        //   };

        //   console.log(dadosForm)

        //   res.redirect('/')

        //   const connection = application.config.dbConnection;
        //   const usersDao = new application.app.models.UsersDAO(connection);
      
          // usersDao.uploadImage(dadosForm,(error, results)=>{

          // })

        }