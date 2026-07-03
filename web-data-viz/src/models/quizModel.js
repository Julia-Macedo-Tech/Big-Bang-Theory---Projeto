var database = require("../database/config");

function cadastroQuiz(tipo, matematica, serie, fkusuario) {
  var instrucaoSql = `insert into quiz(tipo, pontuacao_matematica, pontuacao_serie, fk_usuario) values ('${tipo}', ${matematica}, ${serie}, ${fkusuario})`;

  return database.executar(instrucaoSql);
}

module.exports = { cadastroQuiz };
