var avisoModel = require("../models/avisoModel");

function listar(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(idUsuario); 

    avisoModel.listar(idUsuario)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    avisoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarDescricao(req, res) {
    var descricao = req.params.descricao;

    avisoModel.pesquisarDescricao(descricao)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var idUsuario = req.params.idUsuario;
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    const foto = req.file ? req.file.filename : null;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinida!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        avisoModel.publicar(titulo, descricao, foto)
            .then(function (resultado) {
                var idPostagem = resultado.insertId;
                avisoModel.cadastrarInteracao(idUsuario, idPostagem)
                    .then(function () {
                        res.json({ insertId: idPostagem });
                    });
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


function editar(req, res) {
    var idPostagem = req.params.idPostagem;
    var novaDescricao = req.body.descricao;

    console.log("ID da Postagem:", idPostagem);
    console.log("Nova Descrição:", novaDescricao);

    if (!idPostagem) {
        res.status(400).send("O id da postagem está indefinido!");
    } else if (!novaDescricao) {
        res.status(400).send("A nova descrição está indefinida!");
    } else {
        avisoModel.editar(novaDescricao, idPostagem)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a edição: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}



function deletar(req, res, idUsuario, idPostagem) {
    var idUsuario = req.params.idUsuario;
    var idPostagem = req.params.idPostagem;

    console.log(`idUsuario: ${idUsuario}, idPostagem: ${idPostagem}`)

    avisoModel.deletar(idUsuario, idPostagem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

    // function deletarInteracao(req, res) {
    //     // var idUsuario = req.body.idUsuarioServer;
    //     var idUsuario = req.params.idUsuario;

    //     var idPostagem = req.params.idPostagem;

    //     console.log(`Tentando deletar a interação com fkUsuario: ${idUsuario} e fkPostagem: ${idPostagem}`);

    //     avisoModel.deletarInteracao(idUsuario, idPostagem)
    //         .then(function (resultado) {
    //             if (resultado.affectedRows > 0) {
    //                 res.status(200).json({ message: "Interação deletada com sucesso" });
    //             } else {
    //                 res.status(404).json({ message: "Interação não encontrada" });
    //             }
    //         })
    //         .catch(function (erro) {
    //             console.log("Houve um erro ao deletar a interação: ", erro.sqlMessage);
    //             res.status(500).json(erro.sqlMessage);
    //         });
    // }



module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
}