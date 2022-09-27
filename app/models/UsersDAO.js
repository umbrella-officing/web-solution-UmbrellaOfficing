function UsersDAO(connection) {
    this._connection = connection;
}

UsersDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from sala', callback);
}
UsersDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query(`select * from sala`, callback);
}

UsersDAO.prototype.registerUser = function (noticia, callback) {
    this._connection.query('INSERT INTO teste SET  ?',noticia,callback)
}

UsersDAO.prototype.get5UltimasNoticias = function (noticia, callback) {
    this._connection.query('select * from teste', noticia, callback);
}

UsersDAO.prototype.login = function (user, callback) {
    this._connection.query(`select * from teste where name = '${user.dadosuser}' ? or email_user = '${user.dadosuser}'`, callback);
}

module.exports = function () {
    return UsersDAO;
}