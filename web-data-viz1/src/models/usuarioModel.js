var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, dtNasc, email, senha, fkEstilo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, dtNasc, email, senha);
    var instrucaoSql = `
        INSERT INTO usuario (nome, dtNasc, email, senha, fkEstilo) VALUES ('${nome}', '${dtNasc}', '${email}', '${senha}', '${fkEstilo}');
    `;
    console.log("Executando a instrução SQL para cadastrar usuário: \n" + instrucaoSql);
    return database.executar(instrucaoSql)

    // para executar apos a a var principal
    .then(result => {
        // Obtém o ID do usuário recém-inserido
        const idUsuario = result.insertId;
        console.log("ID do usuário inserido:", idUsuario);
        
        // Cria a instrução SQL para inserir um registro na tabela perfil usando o ID do usuário
        var instrucaoPerfilSql = `
            INSERT INTO perfil (fkUsuario) VALUES ('${idUsuario}');
        `;
        console.log("Executando a instrução SQL para cadastrar perfil: \n" + instrucaoPerfilSql);

        // Executa a instrução SQL para cadastrar o perfil
        return database.executar(instrucaoPerfilSql);
    });
}


// function cadastrarPerfil(nome, dtNasc, email, senha, fkEstilo) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, dtNasc, email, senha);
    
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucaoSql = `
//         INSERT INTO usuario (nome, dtNasc, email, senha, fkEstilo) VALUES ('${nome}', '${dtNasc}', '${email}', '${senha}', '${fkEstilo}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    autenticar,
    cadastrar
    // cadastrarPerfil
};