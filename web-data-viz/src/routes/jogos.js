var express = require("express");
var router = express.Router();

var jogosController = require("../controllers/jogosController");

router.get("/cadastroPuzzle/:movimentos/:idusuario", function (req, res) {
    jogosController.cadastroPuzzle(req, res);
})

module.exports = router;