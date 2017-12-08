module.exports = (function(app){
    app.get('/formularios', function(req, res){
        res.render("./admin/form_add_noticia.ejs");
    });
});
