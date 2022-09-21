module.exports = (application) => {
    application.get('/teste', (req, res) => {
      application.app.controllers.homeController.index(application, req, res);
    });
  }