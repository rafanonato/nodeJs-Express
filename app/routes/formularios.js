
module.exports = (function(app){

    app.get('/formularios', function(req, res){
        var conn = app.config.dbConnection();

        conn.query('Select * from formulariousuarios', function(error, result){

        res.render("./admin/form_add_noticia.ejs", {formulariousuarios : result});

         });

    });

});
