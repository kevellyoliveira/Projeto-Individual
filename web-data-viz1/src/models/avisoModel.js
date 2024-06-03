var database = require("../database/config");

function listar() {
    console.log("ACESSEI O postagem  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    select nome, email, u.foto as ftUsuario, titulo, p.foto as ftPostagem, p.descricao, c.qtd_curtida from Curtida as c
	join Usuario as u
		on fkUsuario = idUsuario
	join Postagem as p
		on fkPostagem = idPostagem 
        ORDER BY p.dtPostagem DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function listar() {
//     console.log("ACESSEI O postagem  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
//     var instrucaoSql = `
//     select nome, email, u.foto, titulo, p.foto, p.descricao, c.qtd_curtida from Curtida as c
// 	join Usuario as u
// 		on fkUsuario = idUsuario
// 	join Postagem as p
// 		on fkPostagem = idPostagem;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

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

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
    select * from curtida 
    join usuario as u
        on fkUsuario = idUsuario
    join postagem as p
        on fkPostagem = idPostagem
    where idUsuario = '${idUsuario}';
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


function editar(novaDescricao, idPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idPostagem);
    var instrucaoSql = `
        UPDATE postagem SET descricao = '${novaDescricao}' WHERE idPostagem = '${idPostagem}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idUsuario, idPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idUsuario, idPostagem);
    var instrucaoSql = `
    DELETE FROM interacao WHERE fkUsuario = '${idUsuario}' AND fkPostagem = '${idPostagem}';
    delete from postagem where idPostagem = '${idPostagem}';
    `;


    console.log("Executando as instruções SQL para deletar interações e postagem: \n" + deletarInteracao);
    return database.executar(instrucaoSql)
}


module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    cadastrarInteracao,
    publicar,
    editar,
    deletar
}
