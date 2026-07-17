var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas, tipo) {

    var instrucaoSql = `SELECT 
        pontuacao_matematica as pontuacao_matematica, 
        pontuacao_serie as pontuacao_serie,
        tipo,
        (SELECT count(*) FROM quiz WHERE fk_usuario = ${idUsuario} AND tipo = "Fácil") as total_tentativas_facil,
        (SELECT count(*) FROM quiz WHERE fk_usuario = ${idUsuario} AND tipo = "Médio") as total_tentativas_medio,
        (SELECT count(*) FROM quiz WHERE fk_usuario = ${idUsuario} AND tipo = "Difícil") as total_tentativas_dificil,
                        DATE_FORMAT(cadastrado_em, '%d/%m/%Y %H:%i:%s') as cadastrado_em
                    FROM quiz
                    WHERE fk_usuario = ${idUsuario} and tipo = '${tipo}' 
                    ORDER BY id_quiz DESC LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario, tipo) {

    var instrucaoSql = `SELECT 
        pontuacao_matematica as pontuacao_matematica, 
        pontuacao_serie as pontuacao_serie,
        tipo,
        (SELECT count(*) FROM quiz WHERE fk_usuario = ${idUsuario} AND tipo = "Fácil") as total_tentativas_facil,
        (SELECT count(*) FROM quiz WHERE fk_usuario = ${idUsuario} AND tipo = "Médio") as total_tentativas_medio,
        (SELECT count(*) FROM quiz WHERE fk_usuario = ${idUsuario} AND tipo = "Difícil") as total_tentativas_dificil,
                        DATE_FORMAT(cadastrado_em, '%d/%m/%Y %H:%i:%s') as cadastrado_em
                    FROM quiz
                    WHERE fk_usuario = ${idUsuario} and tipo = '${tipo}'
                    ORDER BY id_quiz DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
