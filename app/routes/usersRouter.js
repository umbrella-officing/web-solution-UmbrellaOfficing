module.exports = (application) => {

  application.get('/central', (req, res) => {
    application.app.controllers.usersController.central(application, req, res);
  });

    application.get('/cadastro', (req, res) => {
      application.app.controllers.usersController.index(application, req, res);
    });

    application.post('/cadastro', (req, res) => {
      application.app.controllers.usersController.registerUser(application, req, res);
    });

    application.get('/login', (req, res) => {
      application.app.controllers.usersController.login(application, req, res);
    });

    application.post('/login', (req, res) => {
      application.app.controllers.usersController.formLogin(application, req, res);
    });

    application.get('/sair', (req, res) => {
      application.app.controllers.usersController.sair(application, req, res);
    });

  }