var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    // var cpf = req.body.cpfServer;


    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        //      .buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                        //     .then((resultadoAquarios) => {
                        //         if (resultadoAquarios.length > 0) {
                                    res.json({
                                        idUsuario: resultadoAutenticar[0].idUsuario,
                                        dtNasc: resultadoAutenticar[0].dtNasc,
                                        nome: resultadoAutenticar[0].nome,
                                        email: resultadoAutenticar[0].email,
                                        senha: resultadoAutenticar[0].senha,
                                        // Estilo: resultadoAutenticar[0].fkEstilo,
                                        // aquarios: resultadoAquarios

                                    });
                                // } else {
                                //     res.status(204).json({ aquarios: [] });
                                // }
                            // })
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

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nome;
    var dtNasc = req.body.dtNasc;
    var email = req.body.email;
    var senha = req.body.senha;
    var confirmacao = req.body.confirmacaoSenha;
    var empresaId = req.body.empresaId;

    // const imagem = req.file.filename;
    const foto = req.file ? req.file.filename : null;

    // const {nome, dtNasc, email, senha, confirmacao, empresaId} = req.body

    const usuario = { nome, dtNasc, email, senha, foto, confirmacao, empresaId }
    
    // Faça as validações dos valores
    if (nome == undefined && nome.length > 1) {
        res.status(400).send("Seu nome está undefined!");
    } else if (dtNasc == undefined && dtNasc.length != 8) {
        res.status(400).send("Seu dtNasc está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined && senha == confirmacao) {
        res.status(400).send("Sua senha está undefined!");
    } else if (empresaId == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } 
    else {  
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(usuario)
        .then(
            function (resultado) {
                res.json(resultado);
                // var idPostagem = resultado.insertId;
                // avisoModel.cadastrarPerfil(idUsuario);
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

function buscarUsuarioPeloId(req, res) {
    console.log(req.params.idUsuario); 
    usuarioModel.buscarUsuarioPeloId(req.params.idUsuario)
    .then(resultado => {
      res.json(resultado);
    }).catch(err => {
      res.status(500).send(err);
    });
  }
module.exports = {
    autenticar,
    cadastrar, buscarUsuarioPeloId
}