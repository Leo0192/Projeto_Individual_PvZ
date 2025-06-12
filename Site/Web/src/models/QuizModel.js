var database = require("../database/config");

function inserirPontuacao(pontuacao, fkUsuario) {

    var instrucaoSql = `
    INSERT INTO usuarioQuiz (fkQUiz, fkUsuario, pontuacao, data)
    VALUES (1, ${fkUsuario} ,${pontuacao}, now() );`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacao(idUsuario) {

    var instrucaoSql = `
    select pontuacao as pontuacao from usuarioQuiz
    where fkUsuario = ${idUsuario} order by data desc limit 1;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacaoMaxima(idUsuario) {

    var instrucaoSql = `
       select pontuacao as pontuacao from usuarioQuiz
       where fkUsuario = ${idUsuario} order by pontuacao desc limit 1;`
       
       console.log("entrei na rota buscar maxima")
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacaoMedia(idUsuario) {

    var instrucaoSql = `
       select round (AVG(pontuacao)) as pontuacao from usuarioQuiz
        where fkUsuario = ${idUsuario} order by pontuacao desc limit 1;`
       
    console.log("entrei na rota buscar maxima")
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
 
module.exports = {
    buscarPontuacao,
    inserirPontuacao,
    buscarPontuacaoMaxima,
    buscarPontuacaoMedia
}
