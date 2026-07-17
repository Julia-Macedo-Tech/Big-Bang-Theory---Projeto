var express = require("express");
var router = express.Router();

var jogosController = require("../controllers/jogosController");

router.get("/cadastroPuzzle/:movimentos/:idusuario", function (req, res) {
    jogosController.cadastroPuzzle(req, res);
})

router.get("/ranking", function (req, res) {
    jogosController.ranking(req, res);
})

module.exports = router;