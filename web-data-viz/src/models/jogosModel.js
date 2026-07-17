var database = require("../database/config");

function cadastroPuzzle(movimentos, fkusuario) {

    var instrucaoSql = `INSERT INTO jogo_puzzle (qtd_movimentos, fk_usuario) VALUES (${movimentos}, ${fkusuario})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ranking() {

    var instrucaoSql = `select nome, foto_usuario, qtd_movimentos from usuario
join jogo_puzzle on fk_usuario = id_usuario
order by qtd_movimentos;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastroPuzzle,
    ranking
}