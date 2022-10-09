const multer = require('multer');
const path = require('path'); //modulo para acesso e interação com arquivos de sistema

var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './app/public/imagem/temp/') // diretório de destino  
  },
  filename: (req, file, callBack) => {
    callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) //renomeando o arquivo para evitar duplicidade de nomes
  }
})
//adiciona este diretório ao método de upload
// var upload = multer({storage: storage });
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

module.exports = (application) => {

  application.get('/', (req, res) => {
    application.app.controllers.usersController.home(application, req, res);
  });

    application.get('/cadastro', (req, res) => {
      application.app.controllers.usersController.index(application, req, res);
    });

    application.post('/cadastro', (req, res) => {
      application.app.controllers.usersController.registerUser(application, req, res);
    });

    application.post('/login', (req, res) => {
      application.app.controllers.usersController.formLogin(application, req, res);
    });

    application.get('/sair', (req, res) => {
      application.app.controllers.usersController.sair(application, req, res);
    });

    application.post("/perfil2", 
    upload2.single('ImagemPerfil'), 

    async function (req, res) {
      if (!req.file) {
        console.log("Falha no carregamento");
      } else {

        let fileContent = req.file.buffer.toString('base64');
      
        var dadosForm = {
          nome_usuario:req.body.Nome,
          user_usuario:req.body.NomeUsuario,
          senha_usuario:req.body.Senha,
          email_usuario:req.body.Email,
          fone_usuario:req.body.Telefone,
          tipo_usuario: 1, 
          imagemperfil_usuario:fileContent,
          caminho_imagemperfil_usuario:null,
        };

        try {
        results = await usuarioDAO.Create(dadosForm); 
        } catch (e) {
          console.log(e); // console log the error so we can see it in the console
          res.json({ erro: "Falha ao acessar dados" });
        }

      }
      res.redirect('/')
});

  }