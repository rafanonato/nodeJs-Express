module.exports = function(app){

var mysql = require('mysql');

    app.get('/usuarios', function(req, res){

        var conn =  mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'portal_noticias'
        });

        conn.query('SELECT * FROM usuarios' , function(error, result){

            res.render("./usuario/usuarios.ejs", {usuarios : result });

            //res.send(result); Mostra o resultado JSON Puro
        });
    });
}
