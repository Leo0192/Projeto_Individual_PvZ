var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/pontuacao", function (req, res) {
    quizController.inserirPontuacao(req, res);
});

router.get("/pontuacao/:idUsuario", function (req, res) {
    quizController.buscarPontuacao(req, res);
})

module.exports = router;