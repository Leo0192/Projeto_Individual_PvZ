var usuarioModel = require("../models/usuarioModel");

// function cadastrar(req, res) {
//     var nome = req.body.nomeServer;
//     var nome_usuario = req.bodynome_usuarioServer;
//     var email = req.body.emailServer;
//     var senha = req.body.senhaServer;

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
console.log(senha,email)

    usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {
                    console.log(resultadoAutenticar);

                    // tem que adicionar o campo que será utilizado/ coluna
                    // aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                    //     .then((resultadoAquarios) => {
                    //         if (resultadoAquarios.length > 0) {
                    res.json({
                        id: resultadoAutenticar[0].id,
                        email: resultadoAutenticar[0].email,
                        nome: resultadoAutenticar[0].nome,
                        nome_usuario: resultadoAutenticar[0].nome_usuario,
                        senha: resultadoAutenticar[0].senha,
                    });

                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome_usuario = req.body.nome_usuario;
    var email = req.body.email;
    var senha = req.body.senha;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (nome_usuario == undefined) {
        res.status(400).send("Seu nome de usuario está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, nome_usuario, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    usuarioModel.listar()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log("Erro ao listar usuários:", erro.sqlMessage || erro);
            res.status(500).json(erro.sqlMessage || erro);
        });
}
module.exports = {
    autenticar,
    cadastrar,
    listar
}