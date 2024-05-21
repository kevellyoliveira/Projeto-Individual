var aquarioModel = require("../models/aquarioModel");

function buscarAquariosPorEmpresa(req, res) {
  var idPerfil = req.params.idPerfil;

  aquarioModel.buscarAquariosPorEmpresa(idPerfil).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var foto = req.body.foto;
  var nome = req.body.nome;
  var descricao = req.body.descricao;
  var idPerfil = req.body.idPerfil;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idPerfil == undefined) {
    res.status(400).send("idPerfil está undefined!");
  } else if (nome == undefined) {
    res.status(400).send("nome está undefined!");
  } else if (foto == undefined) {
    res.status(400).send("foto está undefined!");
  } else {


    aquarioModel.cadastrar(idPerfil, nome, descricao, foto)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}