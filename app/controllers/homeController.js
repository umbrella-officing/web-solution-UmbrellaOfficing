module.exports.index = (application, req, res) => {
    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.NoticiasDAO(connection);
    noticiasDao.get5UltimasNoticias((error, result) => {
      res.render("teste/teste", {
        noticias: result
      })
    });
  }