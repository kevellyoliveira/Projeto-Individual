var database = require("../database/config");

function buscarPorId(idEstilo) {
  var instrucaoSql = `SELECT * FROM Estilo WHERE id = '${idEstilo}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM Estilo`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(nome) {
  var instrucaoSql = `SELECT * FROM Estilo WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome, descricao) {
  var instrucaoSql = `INSERT INTO Estilo (nome, descricao) VALUES ('${nome}', '${descricao}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
