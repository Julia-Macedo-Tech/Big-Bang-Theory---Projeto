var express = require("express");
var router = express.Router();

var jogosController = require("../controllers/jogosController");

router.get("/cadastroPuzzle/:movimentos/:idusuario", function (req, res) {
    jogosController.cadastroPuzzle(req, res);
})

router.get("/ranking", function (req, res) {
    jogosController.ranking(req, res);
})

router.get("/vencedor/:idusuario", function (req, res) {
    jogosController.vencedor(req, res);
})

router.get("/tabela/:idusuario", function (req, res) {
    jogosController.tabela(req, res);
})

router.get("/selectPuzzle/:idusuario", function (req, res) {
    jogosController.selectPuzzle(req, res);
})

router.get("/updatePuzzle/:movimentos/:idusuario", function (req, res) {
    jogosController.updatePuzzle(req, res);
})

router.get("/cadastroLuta/:vencedor/:idusuario", function (req, res) {
    jogosController.cadastroLuta(req, res);
})

module.exports = router;