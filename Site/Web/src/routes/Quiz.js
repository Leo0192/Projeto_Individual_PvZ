var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/inserirPontuacao", function (req, res) {
    quizController.inserirPontuacao(req, res);
});

router.get("/pontuacao/:fkUsuario", function (req, res) {
    quizController.buscarPontuacao(req, res);
})

router.get("/pontuacaoMaxima/:fkUsuario", function (req, res) {
    quizController.buscarPontuacaoMaxima(req, res);
})

router.get("/pontuacaoMedia/:fkUsuario", function (req, res) {
    quizController.buscarPontuacaoMedia(req, res);
})
module.exports = router;