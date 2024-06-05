var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
    select idUsuario, nome, dtNasc, email,senha, foto, dtCadastro, fkEstilo from Usuario
    WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(usuario) {
  
    var instrucaoSql = `
        INSERT INTO usuario (nome, dtNasc, email, senha, foto, fkEstilo) VALUES ('${usuario.nome}', '${usuario.dtNasc}', '${usuario.email}', '${usuario.senha}', '${usuario.foto}', '${usuario.empresaId}');
    `;
    console.log("Executando a instrução SQL para cadastrar usuário: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function buscarUsuarioPeloId(idUsuario) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    var instrucaoSql = ` SELECT idUsuario, u.nome, email,
     truncate((DATEDIFF(CURRENT_DATE(), dtNasc) / 365),0) AS dtNasc,
    senha, u.foto, 
    DATE_FORMAT(dtCadastro, '%d-%m-%Y') as dtCadastro, 
    e.nome as fkEstilo
        FROM Usuario AS u
    JOIN Estilo AS e ON u.fkEstilo = e.idEstilo
     WHERE idUsuario = ${idUsuario}  `;
     
    console.log("Executando a instrução SQL para cadastrar usuário: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

module.exports = {
    autenticar,
    cadastrar,
    buscarUsuarioPeloId
};