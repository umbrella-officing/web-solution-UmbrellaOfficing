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

module.exports = (application) => {

  application.get('/', (req, res) => {
    application.app.controllers.usersController.home(application, req, res);
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
    })

    application.get("/meu-perfil", (req, res) =>{
      application.app.controllers.usersController.renderProfile(application, req, res);
    });

    application.post("/meu-perfil", (req, res) =>{
      application.app.controllers.usersController.registerProfile(application, req, res);
    });
  }