var database = require("../database/config");

function buscarAquariosPorEmpresa() {
  var instrucaoSql = `
  select nome, email, u.foto, titulo, p.foto, p.descricao from comentario as c
	join Usuario as u
		on fkUsuario = idUsuario
	join Postagem as p
		on fkPostagem = idPostagem;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idPerfil, apelido, foto, descricao) {
  
  var instrucaoSql = `INSERT INTO (idPerfil, apelido, foto, descricao) perfil VALUES (${idPerfil}, ${apelido}, ${foto}, ${descricao}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
