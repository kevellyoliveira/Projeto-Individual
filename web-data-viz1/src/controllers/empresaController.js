var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var idEstilo = req.query.idEstilo;

  empresaModel.buscarPorCnpj(idEstilo).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var idEstilo = req.body.idEstilo;
  var descricao = req.body.descricao;

  empresaModel.buscarPorCnpj(idEstilo).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o idEstilo ${idEstilo} já existe` });
    } else {
      empresaModel.cadastrar(idEstilo, descricao).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
};
