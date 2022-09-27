module.exports = (application) => {
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

  }