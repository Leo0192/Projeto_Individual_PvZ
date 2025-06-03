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
    select max(pontuacao) from usuarioQuiz
    where fkUsuario = ${idUsuario};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPontuacao,
    inserirPontuacao
}
