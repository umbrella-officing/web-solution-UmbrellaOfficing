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
    this._connection.query('INSERT INTO usuarios SET  ?',noticia,callback)
}

UsersDAO.prototype.get5UltimasNoticias = function (noticia, callback) {
    this._connection.query('select * from teste', noticia, callback);
}

UsersDAO.prototype.login = function (user, callback) {
    this._connection.query(`SELECT * FROM usuarios WHERE email_user = ? or cpf_user = ?`, [user.userId, user.userId], callback);
}

UsersDAO.prototype.findUserInformations = function (user, callback) {
    this._connection.query(`SELECT * FROM usuarios where cpf_user = ` + user, callback);
}

UsersDAO.prototype.uploadImage = function(user, callBack){
    this._connection.query(`UPDATE usuarios SET fotos_user = ?  where cpf_user = ?`, [user.fotos_user, user.cpf_user], callBack)
}

UsersDAO.prototype.registerProfile= function (user, callback) {
    this._connection.query(`UPDATE usuarios SET sobre_mim = ?,  perfil_profissional = ? where cpf_user = ? `, [user.sobre_mim, user.perfil_profissional, user.id_user], callback)
}

module.exports = function () {
    return UsersDAO;
}