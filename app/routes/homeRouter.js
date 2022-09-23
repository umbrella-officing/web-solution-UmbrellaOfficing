module.exports = (application) => {
    application.get('/teste', (req, res) => {
      application.app.controllers.homeController.index(application, req, res);
    });

    application.post('/cadastro', (req, res) => {
      application.app.controllers.homeController.registerUser(application, req, res);
    });
  }