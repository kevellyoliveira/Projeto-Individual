var database = require("../database/config");

function buscarAquariosPorEmpresa() {
  var instrucaoSql = `
  select u.nome, u.email, p.titulo, p.foto, p.descricao from interacao
	join usuario as u
		on fkUsuario = idUsuario
	join postagem as p
		on fkPostagem = idPostagem;
    `;

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
