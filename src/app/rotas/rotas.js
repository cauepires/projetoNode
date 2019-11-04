const livroDao = require('../infra/livro-dao');
const db = require('../../config/database');
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send("Home");
    });
    app.get('/sobre', (req, res) => {
        res.send("Sobre");
    });
    app.get('/lista', (req, res) => {
        const livro_dao = new livroDao(db);
        livro_dao.lista()
            .then(livros => res.marko(
                require('../view/lista/lista.marko'),
                {
                    livros: livros
                }
            ))
            .catch(erro => console.log(erro));
    });
};