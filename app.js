var app = require("./config/server");

var rt_home =  require("./app/routes/home.js")(app);
var rt_users = require("./app/routes/usuarios.js")(app);
var rt_noticias = require('./app/routes/noticias.js')(app);
var rt_formulario =  require("./app/routes/formularios.js")(app);

app.listen(3125, function(){
    console.log("SERVIDOR ON");
});