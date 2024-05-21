var database = require("../database/config");

function buscarAquariosPorEmpresa(idEstilo) {

  var instrucaoSql = `SELECT * FROM perfil a WHERE fkEstilo = ${idEstilo}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idPerfil, apelido, foto, descricao, fkEstilo) {
  
  var instrucaoSql = `INSERT INTO (idPerfil, apelido, foto, descricao, fkEstilo) perfil VALUES (${idPerfil}, ${apelido}, ${foto}, ${descricao}, ${fkEstilo})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
