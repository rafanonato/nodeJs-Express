var conexao = require('../../config/dbConnection.js');

module.exports = function(app){

    var conn = conexao();

    app.get('/usuarios', function(req, res){

        conn.query('SELECT * FROM usuarios' , function(error, result){

            res.render("./usuario/usuarios.ejs", {usuarios : result });

            //res.send(result); Mostra o resultado JSON Puro
        });
    });
}
