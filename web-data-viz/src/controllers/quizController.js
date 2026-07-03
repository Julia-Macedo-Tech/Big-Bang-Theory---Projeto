const { response } = require("express");
var quizModel = require("../models/quizModel");

function cadastroQuiz(req, res) {
  var tipo = req.params.tipo;
  var matematica = req.params.matematica;
  var serie = req.params.serie;
  var fkusuario = req.params.fkusuario;

  quizModel.cadastroQuiz(tipo, matematica, serie, fkusuario).then((resultado) => {
    if (resultado.lenght > 0) {
      res.status(200).json(resultado);

    } else {
      res.status(204).send("Nenhum resultado encontrado!")
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao cadastrar as ultimas medidas.", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  cadastroQuiz
};
