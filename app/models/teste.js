function NoticiasDAO(connection) {
    this._connection = connection;
    console.log(this._connection = connection)
}

NoticiasDAO.prototype.get5UltimasNoticias = function (callback) {
    this._connection.query('select * from sala', callback);
    console.log('teste')
}

module.exports = function () {
    return NoticiasDAO;
}