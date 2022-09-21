function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from sala', callback);
}
NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query(`select * from sala`, callback);
}

// NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
//     this._connection.query('insert into noticias set ?', noticia, callback);
// }

NoticiasDAO.prototype.get5UltimasNoticias = function (noticia, callback) {
    this._connection.query('select * from sala', noticia, callback);
}

module.exports = function () {
    return NoticiasDAO;
}