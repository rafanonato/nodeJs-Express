var mysql = require('mysql');

connMySQL = function(){
    console.log("CONEXÃO COM BD ESTABELECIDA COM SUCESSO!");
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'portal_noticias'
    });
}

module.exports = function(){
    console.log("Modulo Autoload carregado com Sucesso!");
   return connMySQL;
}

