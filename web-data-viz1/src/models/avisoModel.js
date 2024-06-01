var database = require("../database/config");

function listar() {
    console.log("ACESSEI O postagem  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    select nome, email, u.foto, titulo, p.foto, p.descricao, c.qtd_curtida from Curtida as c
	join Usuario as u
		on fkUsuario = idUsuario
	join Postagem as p
		on fkPostagem = idPostagem;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
    select nome, email, u.foto, titulo, p.foto, p.descricao, c.qtd_curtida from Curtida as c
	join Usuario as u
		on fkUsuario = idUsuario
	join Postagem as p
		on fkPostagem = idPostagem;
        WHERE p.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarInteracao(fkUsuario, fkPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
   INSERT INTO curtida (fkUsuario, fkPostagem) VALUES ('${fkUsuario}', '${fkPostagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario() {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
    SELECT (titulo, descricao, foto) FROM postagem;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, foto) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, foto);
    var instrucaoSql = `
        INSERT INTO postagem (titulo, descricao, foto) VALUES ('${titulo}', '${descricao}', '${foto}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function editar(novaDescricao, novoTitulo, idPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, novoTitulo, idPostagem);
    var instrucaoSql = `
        UPDATE postagem SET descricao = '${novaDescricao}', titulo = '${novoTitulo}' WHERE idPostagem = '${idPostagem}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarInteracao(fkUsuario, idPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", fkUsuario, idPostagem);
    var instrucaoSql = `
    DELETE FROM interacao WHERE fkUsuario = '${fkUsuario}' AND fkPostagem = '${idPostagem}';
    `;
    
    console.log("Executando as instruções SQL para deletar interações e postagem: \n" +  deletarInteracao);
    return database.executar(instrucaoSql)
}


module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    cadastrarInteracao,
    publicar,
    editar,
    deletarInteracao
}
