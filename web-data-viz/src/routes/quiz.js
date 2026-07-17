var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/cadastroQuiz/:tipo/:matematica/:serie/:fkusuario", function (req, res) {
  quizController.cadastroQuiz(req, res);
});

router.get("/buscarQuiz/:id_usuario", function (req, res) {
  quizController.buscarQuiz(req, res);
});

module.exports = router;