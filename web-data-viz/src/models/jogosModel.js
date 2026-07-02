var database = require("../database/config");

function cadastroPuzzle(movimentos, fkusuario) {

    var instrucaoSql = `INSERT INTO jogo_puzzle (qtd_movimentos, fk_usuario) VALUES (${movimentos}, ${fkusuario})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastroPuzzle
}