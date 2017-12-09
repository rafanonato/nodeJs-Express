module.exports = function(app){

    app.get('/usuarios', function(req, res){

        var conn = app.config.dbConnection();

        conn.query('SELECT * FROM usuarios' , function(error, result){

            res.render("./usuario/usuarios.ejs", {usuarios : result });

            //res.send(result); Mostra o resultado JSON Puro
        });
    });
}
