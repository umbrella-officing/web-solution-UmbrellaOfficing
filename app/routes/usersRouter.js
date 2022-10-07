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

  }