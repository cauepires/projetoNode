class livroDao {
    constructor(db) {
        this._db = db;
    }
    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro) reject('Não foi possível listar os livros!');
                    return resolve(resultados);
                }
            );
        });
    }
}

module.exports = livroDao;