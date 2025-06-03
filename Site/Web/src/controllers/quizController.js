var quizModel = require("../models/QuizModel");

function inserirpontuacao(req, res) {

    var fkUsuario = req.body.fkUsuarioServer;
    var pontuacao = req.body.pontuacaoServer;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    QuizModel.inserirpontuacao(pontuacao, fkUsuario)
    .then
    (function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar ao inserir.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarPontuacao(req, res) {

    const idUsuario = req.params.idUsuario;

    console.log(`Recuperando medidas em tempo real`);

    QuizModel.buscarPontuacao(idUsuario)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarPontuacao,
    inserirpontuacao

}