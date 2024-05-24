create database indv;

use indv;

create table Estilo (
    idEstilo int primary key auto_increment,
    nome varchar(45) not null, 
    descricao varchar(45) not null,
    foto varchar(120) not null
);


create table Usuario (
    idUsuario int primary key auto_increment,
    nome varchar(26) not null,
    dtNasc date not null,
    email varchar(120) not null,
    senha varchar(20) not null,
    dtCadastro timestamp not null default current_timestamp, 
	    fkEstilo int,
    constraint fkEstiloUsuario foreign key (fkEStilo) 
        references Estilo(idEstilo)
);


create table Postagem (
    idPostagem int primary key auto_increment,
    nome varchar(45) not null, 
    descricao varchar(45) not null,
    foto varchar(120) not null
);

create table Interacao (
    fkUsuario int,
    fkPostagem int, 
    primary key (fkUsuario, fkPostagem),
    constraint fkUsuarioInteracao foreign key (fkUsuario)
        references Usuario(idUsuario),
    constraint fkPostagemInteracao foreign key (fkPostagem)
        references Postagem(idPostagem)
);

-- Criando o índice na tabela Interacao
CREATE UNIQUE INDEX idx_Interacao_fkUsuario_fkPostagem ON Interacao (fkUsuario, fkPostagem);

create table Comentario (
    idComentario int auto_increment primary key,
    descricao varchar(120),
    dtComentario timestamp not null default current_timestamp, 
    fkUsuario int,
    fkPostagem int,
    -- Referenciando o índice na tabela Interacao
    constraint fkInteracaoComentario foreign key (fkUsuario, fkPostagem)
        references Interacao(fkUsuario, fkPostagem),
    index idx_fkInteracaoComentario (fkUsuario, fkPostagem)
);

create table Classificacao (
    idClassificacao int auto_increment primary key,
    descricao varchar(120),
    dtClass timestamp not null default current_timestamp, 
    fkUsuario int,
    fkPostagem int,
    -- Referenciando o índice na tabela Interacao
    constraint fkInteracaoClassificacao foreign key (fkUsuario, fkPostagem)
        references Interacao(fkUsuario, fkPostagem),
    index idx_fkInteracaoClassificacao (fkUsuario, fkPostagem)
);

-- selects de perfil 
-- SELECT * FROM perfil WHERE idPerfil = 1;

SELECT * from interacao
	join postagem as p
		on fkPostagem = idPostagem
	join usuario as u
		on fkUsuario = idUsuario
	where fkPostagem = 1 and fkUsuario = 2;
