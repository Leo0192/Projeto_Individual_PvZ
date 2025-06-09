var database = require("../database/config");

function inserirPontuacao(pontuacao, fkUsuario) {

    var instrucaoSql = `
    INSERT INTO usuarioQuiz (fkQUiz, fkUsuario, pontuacao)
    VALUES (1, ${fkUsuario} ,${pontuacao} );`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacao(idUsuario) {

    var instrucaoSql = `
    select pontuacao as pontuacao from usuarioQuiz
    where fkUsuario = ${idUsuario};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacaoMaxima(idUsuario) {

    var instrucaoSql = `
    select max(pontuacao) as pontuacaoMaxima from usuarioQuiz
    where fkUsuario = ${idUsuario};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPontuacao,
    inserirPontuacao,
    buscarPontuacaoMaxima
}
