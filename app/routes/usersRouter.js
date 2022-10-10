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

    application.post("/perfil2", upload2.single('ImagemPerfil'),(req,res)=>{
      application.app.controllers.usersController.uploadImagePerfil(application, req, res);
    })}